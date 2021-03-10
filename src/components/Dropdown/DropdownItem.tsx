import React from 'react';
import { NoteData } from '../Notes';
import './Dropdown.scss';

interface DropdownProps {
  label: string,
  note: NoteData,
  onClick: (note: NoteData) => void
}

const DropdownItem = ({ label, note, onClick }: DropdownProps) => {
  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.stopPropagation();
    console.log('DropdownItem::handleClick()');
    onClick(note);
  }

  return (
    <li className="dropdown__item" onClick={e => handleClick(e)}>
      <a href="#foo">{label}</a>
    </li>
  );
};

export default DropdownItem;