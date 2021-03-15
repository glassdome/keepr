import React from 'react';
import './Dropdown.scss';

interface DropdownProps<T> {
  label: string,
  data: T,
  onClick: (data: T) => void
}

const DropdownItem = <T, >({ label, data, onClick }: DropdownProps<T>) => {
  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.stopPropagation();
    console.log('DropdownItem::handleClick()');
    onClick(data);
  }

  return (
    <li className="dropdown__item" onClick={e => handleClick(e)}>
      <span>{label}</span>
    </li>
  );
};

export default DropdownItem;