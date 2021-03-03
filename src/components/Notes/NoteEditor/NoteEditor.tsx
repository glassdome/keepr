import { useContext, useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NoteData, NoteControls, NoteUpdateFunction } from '../../Notes';
import { PushPin } from '../../icons';
import { NoteContext, NoteFunctionContextType } from '../../context';

import './NoteEditor.scss';

type EditorProps = {
  note?: NoteData;
  onClose: () => void;
  onUpdate: NoteUpdateFunction;
  placeholderTitle?: string;
  placeholderBody?: string;
};

const safeGetNote = (note?: NoteData): NoteData => {
  if (note !== undefined) {
    return {...note} as NoteData
  } else {
    return { id: uuidv4(), body: '' }
  }
}

const NoteEditor = (props: EditorProps) => {
  const AUTOSAVE_INTERVAL = 2000;

  // The note we are currently editing.
  const [note, setNote] = useState<NoteData>(safeGetNote(props.note));

  // This ref is used to have access to current state in useEffect
  const noteRef = useRef<NoteData>(note);

  const noteFunctions = useContext(NoteContext) as NoteFunctionContextType;

  // Run update immediately when modal closes.
  useEffect(() => {
    // return props.onUpdate(noteRef.current);
    return noteFunctions.onUpdate(noteRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Setup auto-save function.
  useEffect(() => {
    const updateTimerId = setTimeout(() => {
      // props.onUpdate(note);
      noteFunctions.onUpdate(note);
    }, AUTOSAVE_INTERVAL);

    return () => clearTimeout(updateTimerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [note]);

  // const encode = (text: string) => {
  //   const output = text
  //     .replace(/[\\]/g, "\\\\")
  //     .replace(/[/]/g, "\\/")
  //     .replace(/[\b]/g, "\\b")
  //     .replace(/[\f]/g, "\\f")
  //     .replace(/[\n]/g, "\\n")
  //     .replace(/[\r]/g, "\\r")
  //     .replace(/[\t]/g, "\\t")
  //     .replace(/["]/g, '\\"')
  //     .replace(/\\'/g, "\\'");
  //   console.log(output);
  //   return output;
  // };

  const updateNoteBody = (body: string) => setNote({ ...note, body });
  //const updateNoteTitle = (title: string) => setNote({ ...note, title: encode( title ) });

  return (
    <div className="editor" onClick={(e) => e.stopPropagation()}>
      <div className="editor__header">
        <div className="editor__title">{note.title}</div>
        <div className="editor__pin">
          <PushPin />
        </div>
      </div>

      <div className="edit-body-container">
        <div className="editor__body">
          <textarea
            value={note.body}
            onChange={(e) => updateNoteBody(e.target.value)}
          />
        </div>
      </div>
      <div className="editor__edited">Edited Feb 20, 2021</div>

      <div className="editor__footer">
        <NoteControls />
        <div className="editor__undo">
          <div className="edit-left">
            <i className="material-icons-outlined">undo</i>
          </div>
          <div className="edit-right">
            <i className="material-icons-outlined">redo</i>
          </div>
        </div>
        <button className="editor__close" onClick={() => props.onClose()}>
          close
        </button>
      </div>
    </div>
  );
};

export { NoteEditor };  export type { EditorProps };

