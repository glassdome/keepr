import {
  AddAlert,
  AddImage,
  AddPerson,
  ColorPalette,
  MoreVert
} from "../icons";
import { Dropdown, DropdownItem, DropdownOpener } from '../Dropdown';
import '../Dropdown/Dropdown.scss';

const NoteControls = () => {
  return (
    <ul className="note-display-controls">
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
            <DropdownItem label="Delete Note"/>
            <DropdownItem label="Change labels"/>
            <DropdownItem label="Make a copy"/>
          </Dropdown>
        </DropdownOpener>
      </li>
    </ul>
  );
};

export default NoteControls;
