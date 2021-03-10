import { useEffect, useState } from "react";
import { Nav, Header, Workspace } from "./components/layout";
import { NoteData } from "./components/Notes";
import { db } from "./data/db";
import { NoteContext } from './components/context';
import "./styles.scss";

export default function App() {
  const [notes, setNotes] = useState<NoteData[]>([]);

  useEffect(() => {
    setNotes(db.notes as NoteData[]);
  }, []);

  // TODO: Implement setting the 'modified' timestamp on update.
  const updateNote = (data: NoteData): void => {
    const index = notes.findIndex((n: NoteData) => n.id === data.id);
    if (index < 0) {
      console.warn(`Note with ID ${data.id} not found. Cannot update.`);
    } else {
      notes.splice(index, 1, data);
      setNotes([...notes]);
    }
  };

  const createNote = (newNote: NoteData): void => {
    setNotes([...notes, newNote]);
  }

  const upsertNote = (note: NoteData): void => {
    if (notes.find(n => n.id === note.id) === undefined) {
      createNote(note);
    } else {
      updateNote(note);
    }
  }
  
  const deleteNote = (note: NoteData): void => {
    const index = notes.findIndex((n: NoteData) => n.id === note.id);
    if (index < 0) {
      console.warn(`Note with ID ${note.id} not found. No changes made.`);
    } else {
      notes.splice(index, 1);
      setNotes([...notes]);
    }
  }

  const workspaceProps = {
    notes,
    onUpdate: updateNote
  };

  const functions = {
    onUpdate: upsertNote,
    onCreate: createNote,
    onDelete: deleteNote
  }

  return (
    <NoteContext.Provider value={functions}>
      <div className="App">
        <Header />
        <Nav />
        <Workspace {...workspaceProps} />
      </div>
    </NoteContext.Provider>
  );
}
