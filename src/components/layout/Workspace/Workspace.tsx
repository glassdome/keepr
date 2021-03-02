import { Note, NoteData } from '../../Notes';
// import { NoteEditor, EditorProps } from '../../Notes';
import CreateWidget from '../../CreateWidget/CreateWidget';
import './Workspace.scss';

const Workspace = (props: { notes: NoteData[] }) => {
  console.log(`props: ${JSON.stringify(props, null, 2)}`);
  // const editProps: EditorProps = {
  //   note: props.notes[0],
  //   onClose: () => console.log('closing')
  // };
  return (
    <div className="workspace">
      <div className="workspace__controls">
        <CreateWidget />
      </div>
      <div className="workspace__main">
        {/* <NoteEditor {...editProps} /> */}
        {console.log('arg : ' + JSON.stringify(props.notes[0], null, 2))}
        {props.notes.map((n, i) => {
          return <Note key={n.id} {...n} />;
        })}
      </div>
    </div>
  );
};

export default Workspace;
