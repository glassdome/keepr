import { useEffect, useState } from "react";
import { Nav, Header, Workspace } from "./components/layout";
import { NoteData } from "./components/Notes";
import { db } from "./data/db";
import "./styles.scss";

export default function App() {
  const [notes, setNotes] = useState<NoteData[]>([]);

  useEffect(() => {
    setNotes(db.notes as NoteData[]);
  }, []);

  // TODO: Implement setting the 'modified' timestamp on update.
  const updateNote = (data: NoteData) => {
    console.log('Updating note...');
    const index = notes.findIndex((n: NoteData) => n.id === data.id);
    if (index < 0) {
      console.warn(`Note with ID ${data.id} not found. Cannot update.`);
    } else {
      notes.splice(index, 1, data);
      setNotes([...notes]);
    }
  };

  const workspaceProps = {
    notes,
    onUpdate: updateNote
  };

  return (
    <div className="App">
      <Header />
      <Nav />
      <Workspace {...workspaceProps} />
    </div>
  );
}
