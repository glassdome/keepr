import { Link } from "react-router-dom";

import './LandingPage.scss'

const LandingPage = () => {
  return (
    <div className="landing">
      <nav className="landing__nav">
        <div className="nav-buttons">
          <Link to="/signin" className="btn-signin">Sign In</Link>
          <Link to="/signup" className="btn-signup">Sign Up</Link>
        </div>
      </nav>
      <main className="landing__main">
        <div className="landing__hero">
          <h1>Keepr</h1>
        </div>
        
      </main>
      
    </div>
  );
}
export default LandingPage;