import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthProvider, { useAuth } from './components/Auth/AuthProvider';
import { Signin, Signup } from './components/Auth';
import { LandingPage } from './components/LandingPage';
import { Keepr } from './components/Keepr';

import "./styles.scss";

/*
 * Not sure if this component (or some form of it) will remain. It's
 * useful in the short-term while working out the correct patterns
 * to use for nested and protected routes.
 */
const Main = () => {
  const auth = useAuth();
  return auth.session ? <Keepr /> : <LandingPage />;
}


export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route exact path="/"><Main /></Route>
          <Route exact path="/signin" component={Signin}/>
          <Route exact path="/signup" component={Signup}/>
        </div>
      </Router>
    </AuthProvider>
  );
}
