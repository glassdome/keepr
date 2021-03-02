import { useEffect, useState } from "react";
import { Nav, Header, Workspace } from "./components/layout";
import { NoteData } from "./components/Notes";
import { db } from "./data/db";
import "./styles.scss";

export default function App() {
  const [notes, setNotes] = useState<NoteData[]>([]);

  useEffect(() => {
    const t = db.notes;
    console.log(`notes : ${JSON.stringify(t, null, 2)}`);
    setNotes(db.notes as NoteData[]);
  }, []);

  // const updateNote = (data: NoteData) => {
  //   const index = notes.findIndex((n: NoteData) => n.id === data.id);
  //   if (index < 0) {
  //     console.warn(`Note with ID ${data.id} not found. Cannot update.`);
  //   } else {
  //     notes.splice(index, 1, data);
  //     setNotes([...notes]);
  //   }
  // };

  return (
    <div className="App">
      <Header />
      <Nav />
      <Workspace notes={notes} />
    </div>
  );
}
