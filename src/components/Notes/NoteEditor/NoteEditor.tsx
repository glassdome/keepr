import { useState } from 'react';
import { NoteData, NoteControls } from '../../Notes';
import { PushPin } from '../../icons';
import './NoteEditor.scss';

type EditorProps = {
  note: NoteData;
  onClose: () => void;
  //onUpdate: NoteUpdateFunction;
};

const NoteEditor = (props: EditorProps) => {
  console.log(`body : ${JSON.stringify(props.note, null, 2)}`);
  const [noteBody, setNoteBody] = useState(props.note.body);
  const [noteTitle, setNoteTitle] = useState(props.note.title);

  return (
    <div className="editor" onClick={(e) => e.stopPropagation()}>
      <div className="editor__header">
        <div className="editor__title">{noteTitle}</div>
        <div className="editor__pin">
          <PushPin />
        </div>
      </div>

      <div className="edit-body-container">
        <div className="editor__body">
          <textarea
            value={noteBody}
            onChange={(e) => setNoteBody(e.target.value)}
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

