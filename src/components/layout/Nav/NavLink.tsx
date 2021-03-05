import "./Nav.scss";
import { Link } from 'react-router-dom'


const NavLink = (props: { icon: string; label: string }) => {
  
  const link = props.icon === 'lightbulb' ? '/' : `/${props.icon}`

  return (
    <li className="nav-item">
     {/* <a href="#foo" className="nav-link">
        <i className="material-icons-outlined">{props.icon}</i>
        <span className="nav-link-text">{props.label}</span>
  </a> */}
     <Link to={link} className="nav-link">
        <i className="material-icons-outlined">{props.icon}</i>
        <span className="nav-link-text">{props.label}</span>
      </Link>
    </li>
  );
};

export default NavLink;
