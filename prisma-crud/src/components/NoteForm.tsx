"use client";

import { useNotes } from "@/context/NoteContext";
import { useState, useRef, useEffect } from "react";

function NoteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { createNote, selectedNotes, setSelectedNotes, updatedNote } =
    useNotes();
  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (selectedNotes) {
      setTitle(selectedNotes.title);
      setContent(selectedNotes.content || "");
    }
  }, [selectedNotes]);

  return (
    <>
      <h1 className="text-white text-2xl">Create Notes</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          if (selectedNotes) {
            await updatedNote(selectedNotes.id, {
              title,
              content,
            });
            setSelectedNotes(null);
          } else {
            await createNote({
              title,
              content,
            });
          }

          setTitle("");
          setContent("");
          titleRef.current?.focus();
        }}
      >
        <input
          type="text"
          name="title"
          autoFocus
          placeholder="Title"
          className="w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 my-2"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          ref={titleRef}
        />
        <textarea
          name="content"
          placeholder="Content.."
          className="w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 my-2"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>

        <div className="flex justify-end gap-x-2">
          <button
            type="submit"
            className="px-5 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            disabled={!title || !content}
          >
            {selectedNotes ? "Update" : "Create"}
          </button>

          {selectedNotes && (
            <button
              type="button"
              className="px-5 py-2 text-black bg-slate-600 rounded-md hover:bg-slate-700"
              onClick={() => {
                setSelectedNotes(null);
                setTitle("");
                setContent("");
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </>
  );
}

export default NoteForm;
