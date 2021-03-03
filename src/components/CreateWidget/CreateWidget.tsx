import { useState } from 'react';
import { NoteEditor } from '../Notes';
import "./CreateWidget.scss";

const CreateWidget = () => {
  const [editorVisible, setEditorVisible] = useState<boolean>(false);

  const overlayClass = (): string => {
    const name = 'create-widget__overlay '
    return editorVisible ? `${name} show` : `${name} hide`;
  }
  
  const widgetClass = (): string => {
    const name = 'create-widget';
    return editorVisible ? `${name} hide` : `${name} flex`;
  }

  const renderEditor = () => {
    if (!editorVisible) return null;
    const editorProps = {
      note: { id: '', title: 'Title', body: 'Take a note...'},
      onClose: () => setEditorVisible(false),
      onUpdate: () => console.log('writing note...')
    }
    return <NoteEditor {...editorProps} />
  }

  return (
    <>
      <div className={overlayClass()} onClick={() => setEditorVisible(false)}/>
      <div className={widgetClass()}>
        
        <input type="text" 
          className="create-widget__input" 
          placeholder="Take a note..."
          onClick={() => setEditorVisible(true)}/>

        <div className="create-widget__icons">
          <div className="widget-icon">
            <i className="material-icons-outlined">check_box</i>
          </div>
          <div className="widget-icon">
            <i className="material-icons-outlined">insert_photo</i>
          </div>
        </div>
      </div>
      <div className="editor-surface">
        { renderEditor() }
      </div>
    </>
    // <div className="create-widget">
    //   <div className="create__header">
    //     <div
    //       className="create__title"
    //       contentEditable="true"
    //       aria-multiline="true"
    //       role="textbox"
    //     >
    //       {props.title}
    //     </div>
    //     <div className="create__pin">
    //       <PushPin />
    //     </div>
    //   </div>

    //   <div className="edit-body-container">
    //     <div
    //       className="create__body"
    //       contentEditable="true"
    //       aria-multiline="true"
    //       role="textbox"
    //     >
    //       <p>{props.body}</p>
    //     </div>
    //   </div>

    //   <div className="create__footer">
    //     <NoteControls />
    //     <div className="create__undo">
    //       <div className="edit-left">
    //         <i className="material-icons-outlined">undo</i>
    //       </div>
    //       <div className="edit-right">
    //         <i className="material-icons-outlined">redo</i>
    //       </div>
    //     </div>
    //     <div className="create__close">close</div>
    //   </div>
    // </div>
  );
};

export default CreateWidget;
