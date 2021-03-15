import { Dropdown, DropdownOpener, DropdownItem } from '../../../Dropdown';

import './Avatar.scss';

/*
 * TODO: This is interface is cut-and-paste from Keepr.tsx
 */ 
interface User {
  id: string,
  email: string,
  firstName: string,
  lastName: string
}

interface AvatarProps {
  user: User;
  color?: string;
}

const Avatar = ({user, color}: AvatarProps) => {
  const displayText = () => {
    const first = user.firstName[0];
    const last = user.lastName[0];
    // return first === last ? first : first+last;
    return first+last;
  }
  console.log(displayText())
  const bgColor = color || '#555';
  return (
    
    <DropdownOpener>
      <div className="avatar" style={{backgroundColor: bgColor}}>
        <Dropdown>
          <DropdownItem label="Profile" data={user} onClick={() => console.log('Open User Profile...')}/>
          <DropdownItem label="Sign Out" data={user} onClick={() => console.log('Sign Out...')}/>
        </Dropdown>
        <span className="avatar__text">{displayText()}</span>  
      </div>
    </DropdownOpener>
    
  )
}

export default Avatar;