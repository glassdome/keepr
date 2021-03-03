import { useState } from 'react';
import { NoteEditor } from '../Notes';
import "./CreateWidget.scss";

const CreateWidget = () => {
  const [editorVisible, setEditorVisible] = useState<boolean>(false);

  const widgetClass = (): string => {
    const name = 'create-widget';
    return editorVisible ? `${name} hide` : `${name} flex`;
  }

  const overlayClass = (): string => {
    const name = 'create-widget__overlay '
    return editorVisible ? `${name} show` : `${name} hide`;
  }
  
  const renderEditor = () => {
    if (!editorVisible) return null;
    const editorProps = {
      placeholderTtle: 'Title', 
      placeholderBody: 'Take a note...',
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
  );
};

export default CreateWidget;
