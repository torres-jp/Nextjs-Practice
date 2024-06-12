function NoteCard({ note }) {
  return (
    <div key={note.id} className="bg-slate-400 p-4 my-2">
      <h1>{note.title}</h1>
      <p>{note.content}</p>
    </div>
  );
}

export default NoteCard;
