import React from 'react';
import { Link } from 'react-router-dom';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';

import UserPool from '../../../auth/UserPool';
import './Signup.scss';

const Signup = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');

  const newAttribute = (Name: string, Value: string): CognitoUserAttribute => {
    return new CognitoUserAttribute({ Name, Value })
  }

  const onSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    const attrs = [
      newAttribute('given_name', firstName),
      newAttribute('family_name', lastName)
    ]
    UserPool.signUp(email, password, attrs, [], (err, data) => {
      if (err) {
        console.error(err);
      }
      console.log(data);
    })
  };

  return (
    <div className="signup">
      <Link to="/" className="signup__heading">Keepr</Link>
      <form 
        className="signup__form" 
        onSubmit={onSubmit}>
        
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        ></input>
        
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        ></input>

        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
        ></input>

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={event => setLastName(event.target.value)}
        ></input>        

        <label className="agree" htmlFor="agree__check">
          <input type="checkbox" id="agree__check" className="agree__check" name="agree"/>
          <span className="agree__label">
            I agree to the <a href="#foo">Terms</a> and <a href="#bar">Privacy Policy</a>
          </span>
        </label>
      
        <button className="signup__button" type="submit">Signup</button>
        <div className="signup__other">
          <span>
            Already Registered? <Link to="/signin">Sign In!</Link>
          </span>
        </div>
      </form>
    </div>
  )
}

export default Signup;