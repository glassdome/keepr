import { ReactNode } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { AuthProvider, Signin, Signup, useAuth } from './components/Auth';
import { LandingPage } from './components/pages';
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

interface PrivateProps {
  children: ReactNode,
  path: string
}
const PrivateRoute = ({ children, path }: PrivateProps) => {
  let auth = useAuth();

  return (
    <Route path={path}
      render={({ location }) => 
        auth.session ? (children) :
          <Redirect to={{ 
            pathname: '/signin',
          state: { from: location }
        }}
      />
    }
    />
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route exact path="/"><Main /></Route>
          <PrivateRoute path="/notes">
            <Keepr />
          </PrivateRoute>
          <Route exact path="/signin" component={Signin}/>
          <Route exact path="/signup" component={Signup}/>
        </div>
      </Router>
    </AuthProvider>
  );
}
