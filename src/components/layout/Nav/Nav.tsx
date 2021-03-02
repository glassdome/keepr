import NavLink from './NavLink';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul className="nav-items">
        <NavLink icon="lightbulb" label="Notes" />
        <NavLink icon="notifications" label="Reminders" />
        <NavLink icon="label" label="shared" />
        <NavLink icon="create" label="Edit&nbsp;Labels" />
        <NavLink icon="archive" label="Archive" />
        <NavLink icon="delete" label="Trash" />
      </ul>
    </nav>
  );
};

export default Nav;
