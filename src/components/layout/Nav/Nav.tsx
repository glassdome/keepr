import NavLink from './NavLink';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul className="nav-items">
        <NavLink icon="lightbulb" label="Notes" href="/notes" />
        <NavLink icon="notifications" label="Reminders" href="/notes/reminders"/>
        <NavLink icon="label" label="shared" />
        <NavLink icon="create" label="Edit&nbsp;Labels" href="/notes/labels"/>
        <NavLink icon="archive" label="Archive" href="/notes/archive"/>
        <NavLink icon="delete" label="Trash" href="/notes/trash"/>
      </ul>
    </nav>
  );
};

export default Nav;
