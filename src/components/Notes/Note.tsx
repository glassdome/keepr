import { useState } from 'react';
import { PushPin } from '../icons';
import { Modal } from '../Modal';
import NoteControls from './NoteControls';
import { NoteEditor, EditorProps } from './NoteEditor';
import './Note.scss';

export interface NoteData {
  id: string;
  title?: string;
  body: string;
};

export type NoteFunction = (n: NoteData) => void;


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
  
  const asHtml = (text: string) => {
    return text.replace(/\n/g, '<br/>');
  }
  
  return (
    <div className="note-display" onClick={() => setIsEditing(true)}>
      {renderModal()}
      <header className="note-display-header">
        <h2 className="note-display-title">
            {props.note.title}
        </h2>
        <div className="note-display-pin">
          <PushPin />
        </div>
      </header>

      <article className="display-body-container">
        <div 
          className="note-display-body"
          dangerouslySetInnerHTML={{__html: asHtml(props.note.body)}}>
        </div>
      </article>
      <NoteControls note={props.note}/>
    </div>
  );
};

export default Note;
