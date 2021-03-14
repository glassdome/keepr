import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthFunction } from '../AuthProvider/AuthProvider';
import { useAuth } from '..';
import './Signin.scss';

const Signin = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();
  const auth = useAuth();


  const onSubmit = async (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
 
    const signIn = auth.signIn as AuthFunction
    await signIn(email, password)
      .then(data => {
        console.log('User logged in', data);
        history.push('/notes');
      })
      .catch(err => {
        console.error('Login error', err);
      });
  };
  
  return (
    <div className="signin">
      <Link to="/" className="signin__heading">Keepr</Link>
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
            Need an account? <Link to="/signup">Sign Up!</Link>
          </span>
        </div>        
      </form>
    </div>
  )
};


// const Status = () => {
//   const [status, setStatus] = React.useState(false);
//   const { getSession , logout } = useContext(AccountContext);

//   useEffect(() => {
//     if (getSession) {
//       getSession().then(session => {
//         console.log("Session: ", session);
//         setStatus(true);
//       });
//     }
//   }, []);

//   return (
//     <div>
//       { 
//         status 
//           ? <button onClick={logout}>Logout</button>
//           : "Please Sign-In" 
//       }
//     </div>
//   )
// }

export { Signin };