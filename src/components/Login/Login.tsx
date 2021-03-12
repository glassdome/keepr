import React, { useContext, useEffect } from 'react';
// import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
// import UserPool from '../../auth/UserPool';
import { AccountContext, AuthFunction, SessionFunction, LogoutFunction } from '../context/Account/Account';


const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { authenticate } = useContext(AccountContext);

  const onSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  )
};


const Status = () => {
  const [status, setStatus] = React.useState(false);
  const { getSession , logout } = useContext(AccountContext);

  useEffect(() => {
    if (getSession) {
      getSession().then(session => {
        console.log("Session: ", session);
        setStatus(true);
      });
    }
  }, []);

  return (
    <div>
      { status ? "Your are logged in!" : "Please login" }
    </div>
  )
}

export { Login, Status };