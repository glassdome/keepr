import { ReactNode } from 'react';
import './Dropdown.scss';

interface DropdownProps {
  children: ReactNode;
}
const Dropdown = ({ children }: DropdownProps) => {
  return <ul className="dropdown">{ children }</ul>
};

export default Dropdown;