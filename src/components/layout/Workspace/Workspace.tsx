import { Note, NoteData, NoteProps, NoteFunction } from '../../Notes';
import { CreateWidget } from '../../CreateWidget';
import './Workspace.scss';

const Workspace = (props: { notes: NoteData[], onUpdate: NoteFunction }) => {

  const renderNotes = () => {
    return props.notes.map((note: NoteData, index) => {
      const noteProps: NoteProps = {
        note
      };
      return <Note key={index} {...noteProps} />;
    });
  };

  return (
    <div className="workspace">
      <div className="workspace__controls">
        <CreateWidget />
      </div>
      <div className="workspace__main">
        { renderNotes() }
      </div>
    </div>
  );
};

export default Workspace;
