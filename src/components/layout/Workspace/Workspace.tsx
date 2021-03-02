import { Note, NoteData } from '../../Notes';
import CreateWidget from '../../CreateWidget/CreateWidget';
import './Workspace.scss';

const Workspace = (props: { notes: NoteData[] }) => {
  return (
    <div className="workspace">
      <div className="workspace__controls">
        <CreateWidget />
      </div>
      <div className="workspace__main">
        {props.notes.map((n, i) => {
          return <Note key={n.id} {...n} />;
        })}
      </div>
    </div>
  );
};

export default Workspace;
