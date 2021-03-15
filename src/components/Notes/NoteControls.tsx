import { useContext } from 'react';
import {
  AddAlert,
  AddImage,
  AddPerson,
  ColorPalette,
  MoreVert
} from "../icons";
import { NoteData } from './Note';
import { NoteContext, NoteFunctionContextType } from '../context';
import { Dropdown, DropdownItem, DropdownOpener } from '../Dropdown';
import '../Dropdown/Dropdown.scss';

interface ControlProps {
  note: NoteData
}

const NoteControls = ({ note }: ControlProps) => {
  const context = useContext(NoteContext) as NoteFunctionContextType;

  return (
    <ul data-testid="note-controls" className="note-display-controls">
      <li className="note-control-item">
        <AddAlert />
      </li>
      <li className="note-control-item">
        <AddPerson />
      </li>
      <li className="note-control-item">
        <ColorPalette />
      </li>
      <li className="note-control-item">
        <AddImage />
      </li>
      <li className="note-control-item">
        <DropdownOpener>
          <MoreVert />
          <Dropdown>
            <DropdownItem label="Delete Note" data={note} onClick={context.onDelete}/>
            <DropdownItem label="Change labels" data={note} onClick={() => console.log('Change labels')}/>
            <DropdownItem label="Make a copy" data={note} onClick={() => console.log('Make a copy')}/>
          </Dropdown>
        </DropdownOpener>
      </li>
    </ul>
  );
};

export default NoteControls;
