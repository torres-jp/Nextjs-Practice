"use client";

import NoteForm from "@/components/NoteForm";
import { useNotes } from "@/context/NoteContext";
import { useEffect } from "react";

function HomePage() {
  const { notes, loadNotes } = useNotes();

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <NoteForm />

        {notes.map((note) => (
          
        ))}
      </div>
    </div>
  );
}

export default HomePage;

// 01:00:00
