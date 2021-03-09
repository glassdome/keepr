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

export type NoteUpdateFunction = (n: NoteData) => void;

export type NoteProps = {
  note: NoteData;
};

const Note = (props: NoteProps) => {
  // Flag indicating if the NoteEditor is visible.
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const renderEditor = () => {
    const editProps: EditorProps = {
      note: props.note,
      onClose: () => setIsEditing(false),
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
  console.log(`body : ${props.note.body}`);
  const asHtml = (text: string) => {
    return text.replace(/\n/g, '<br/>');
  }
  return (
    <div className="note-display" onClick={() => setIsEditing(true)}>
      {renderModal()}
      <div className="note-display-header">
        <div className="note-display-title">{props.note.title}</div>
        <div className="note-display-pin">
          <PushPin />
        </div>
      </div>

      <div className="display-body-container">
        <div 
          className="note-display-body"
          dangerouslySetInnerHTML={{__html: asHtml(props.note.body)}}>
        </div>
      </div>
      <NoteControls />
    </div>
  );
};

export default Note;
