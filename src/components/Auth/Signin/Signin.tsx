import React, { useContext, useEffect } from 'react';
import { AccountContext, AuthFunction, SessionFunction, LogoutFunction } from '../../context/Account/Account';

import './Signin.scss';

const Signin = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { authenticate } = useContext(AccountContext);

  const onSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    const auth = authenticate as AuthFunction;
    auth(email, password)
      .then(data => {
        console.log('User logged in', data);
      })
      .catch(err => {
        console.error('Login error', err);
      });
  };
  
  return (
    <div className="signin">
      <h1 className="signin__heading">Keepr</h1>
      <form className="signin__form" onSubmit={onSubmit}>
        
        <input
          type="text"
          id="email"
          value={email}
          placeholder="Email"
          onChange={event => setEmail(event.target.value)}
        ></input>
        
        <input
          type="text"
          id="password"
          value={password}
          placeholder="Password"
          onChange={event => setPassword(event.target.value)}
        ></input>
        <button className="signin__button" type="submit">Sign In</button>
        <div className="signin__other">
          <span>
            Need an account? <a href="#baz">Sign Up!</a>
          </span>
        </div>        
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
      { 
        status 
          ? <button onClick={logout}>Logout</button>
          : "Please Sign-In" 
      }
    </div>
  )
}

export { Signin, Status };