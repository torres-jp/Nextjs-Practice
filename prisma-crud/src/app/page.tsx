async function loadNotes() {
  const res = await fetch("http://localhost:3000/api/notes");
  const data = await res.json();
  return data;
}

async function HomePage() {
  const notes = await loadNotes();
  console.log(notes);

  return <div>HomePage</div>;
}

export default HomePage;

// 00:43:00
