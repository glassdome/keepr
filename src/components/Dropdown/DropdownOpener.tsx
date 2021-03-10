import { ReactNode } from 'react';
import './Dropdown.scss';

interface OpenerProps {
  children: ReactNode;
}
const DropdownOpener = ({children}:OpenerProps) => {
  return (
    <div className="dropdown-opener">
      {children}
    </div>
  )
}
export default DropdownOpener;