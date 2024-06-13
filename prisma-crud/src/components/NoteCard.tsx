import { useNotes } from "@/context/NoteContext";
import { Note } from "@prisma/client";

function NoteCard({ note }: { note: Note }) {
  const { deleteNote, setSelectedNotes } = useNotes();

  return (
    <div key={note.id} className="bg-slate-400 p-4 my-2 flex justify-between">
      <div>
        <h1 className="text-2xl font-bold">{note.title}</h1>
        <p>{note.content}</p>
        <p>{new Date(note.createdAt).toLocaleDateString()}</p>
      </div>

      <div className="flex gap-x-2">
        <button onClick={() => deleteNote(Number(note.id))}>Delete</button>
        <button onClick={() => setSelectedNotes(note)}>Edit</button>
      </div>
    </div>
  );
}

export default NoteCard;
