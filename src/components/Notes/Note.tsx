import React from 'react';
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
  const [isEditing, setIsEditing] = React.useState<boolean>(false);

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
  
  const emptyNote = () => {
    const title = (props.note.title || '').trim();
    return title.length === 0 && props.note.body.trim().length === 0
  }

  // Don't render an empty note.
  if (emptyNote()) return null;
  return (
    <article
      className="note-display" 
      onClick={() => setIsEditing(true)}>
        {renderModal()}
      <header className="note-display-header">
        <h2 className="note-display-title">
            {props.note.title}
        </h2>
        <div className="note-display-pin">
          <PushPin />
        </div>
      </header>

      <div className="display-body-container">
        <div 
          data-testid="note-body"
          className="note-display-body"
          dangerouslySetInnerHTML={{__html: asHtml(props.note.body)}}>
        </div>
      </div>
      <NoteControls note={props.note}/>
    </article>
  );
};

export default Note;
