import { useState } from 'react';
import { PushPin } from '../icons';
import { Modal } from '../Modal';
import NoteControls from './NoteControls';
import { NoteEditor, EditorProps } from './NoteEditor';
import './Note.scss';

export type NoteData = {
  id: string;
  title?: string;
  body: string;
};

const Note = (props: NoteData) => {
  // Flag indicating if the NoteEditor is visible.
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const renderEditor = () => {
    const editProps: EditorProps = {
      note: props,
      onClose: () => setIsEditing(false)
    };
    return <NoteEditor {...editProps} />;
  };

  const renderModal = () => {
    return (
      <Modal isVisible={isEditing} onClose={() => setIsEditing(false)}>
        {renderEditor()}
      </Modal>
    );
  };

  return (
    <div className="note-display" onClick={() => setIsEditing(true)}>
      {renderModal()}
      <div className="note-display-header">
        <div className="note-display-title">{props.title}</div>
        <div className="note-display-pin">
          <PushPin />
        </div>
      </div>

      <div className="display-body-container">
        <div className="note-display-body">
          <p>{props.body}</p>
        </div>
      </div>
      <NoteControls />
    </div>
  );
};

export default Note;
