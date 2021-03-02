import "./Nav.scss";

const NavLink = (props: { icon: string; label: string }) => {
  return (
    <li className="nav-item">
      <a href="#foo" className="nav-link">
        <i className="material-icons-outlined">{props.icon}</i>
        <span className="nav-link-text">{props.label}</span>
      </a>
    </li>
  );
};

export default NavLink;
