import {
  AddAlert,
  AddImage,
  AddPerson,
  ColorPalette,
  MoreVert
} from "../icons";

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
      <li className="note-control-item item--more">
        <AddImage />
      </li>
      <li className="note-control-item item--more">
        <MoreVert />
      </li>
    </ul>
  );
};

export default NoteControls;
