import { Link } from 'react-router-dom';
import "./Nav.scss";

interface LinkProps {
  icon: string,
  label: string,
  href?: string
}

const NavLink = ({icon, label, href}: LinkProps) => {         //(props: { icon: string; label: string }) => {
  return (
    <li className="nav-item">
      <Link to={href || '/#none'} className="nav-link">
        <i className="material-icons-outlined">{icon}</i>
        <span className="nav-link-text">{label}</span>
      </Link>
    </li>
  );
};

export default NavLink;
