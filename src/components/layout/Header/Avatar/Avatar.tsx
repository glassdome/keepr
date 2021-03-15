import { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { CognitoIdToken } from 'amazon-cognito-identity-js';
import { User } from '../../../../models/data';
import { useAuth } from '../../../Auth';
import { Dropdown, DropdownOpener, DropdownItem } from '../../../Dropdown';

import './Avatar.scss';

interface AvatarProps {
  color?: string;
}

const newUser = (token: CognitoIdToken): User => ({
  id: token.payload.sub,
  email: token.payload.email,
  firstName: token.payload.given_name,
  lastName: token.payload.family_name
});

const Avatar = ({ color }: AvatarProps) => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const auth = useAuth();

  const [user, setUser] = useState<Partial<User>>({});

  useEffect(() => {
    // Get user data from current auth session.
    if (auth.getSession) {
      auth.getSession().then((session) => {
        setUser( newUser( session.getIdToken() ) )
        console.log('User', user);
      });
    }
  }, []);

  const toUserProfile = () => history.push(`${url}/profile`);

  const signOutUser = () => {
    if (auth.signOut) {
      auth.signOut();
      history.push('/signin');
    } else {
      console.warn(`Could not sign out user. `)
    }
  }

  const getDisplayText = () => {
    const first = (user as User).firstName[0];
    const last = (user as User).lastName[0];
    // return first === last ? first : first+last;
    return first+last;
  }
  
  const getAriaLabel = () => (
    `Keepr Account: ${user.firstName} ${user.lastName} (${user.email})`
  )
  const bgColor = color || '#555';

  
  const renderAvatar = (text: string) => (
    <DropdownOpener>
      <div aria-label={getAriaLabel()} className="avatar" style={{backgroundColor: bgColor}}>
        <Dropdown>
          <DropdownItem label="Profile" data={user} onClick={() => toUserProfile()}/>
          <DropdownItem label="Sign Out" data={user} onClick={() => signOutUser()}/>
        </Dropdown>
        <span className="avatar__text">{ text }</span>  
      </div>
    </DropdownOpener>
  );

  return (
    user.firstName ? renderAvatar(getDisplayText()) : renderAvatar('...')
  )
}

export default Avatar;