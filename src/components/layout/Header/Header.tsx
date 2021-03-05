import "./Header.scss";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="burger">
          <span className="material-icons-outlined">menu</span>
        </div>
        <div className="logo">
          <div className="logo__icon">
            <span className="material-icons">file_present</span>
          </div>
          <div className="logo__text">Keepr</div>
        </div>
      </div>

      {/* <!-- Search --> */}

      <div className="header-search">
        {/* <!--
      <div className="search-bar">
        <input type="text"
               className="search-bar__input"
               placeholder="search"
               aria-label="search"
               />
        <button className="search-bar__submit">
          <span className="material-icons">search</span>
        </button>
      </div>
      --> */}
      </div>

      {/* <!-- Header Tools --> */}

      <div className="header-tools">
        <div className="header-item-refresh">
          <span className="material-icons-outlined">
            <Link to='/' className="header-link">refresh</Link>
          </span>
        </div>
        <div className="header-item-listview">
          <span className="material-icons-outlined">
            <Link to='/view_list' className="header-link">view_list</Link>
          </span>
        </div>
        <div className="header-item-settings">
             <span className="material-icons-outlined"><Link to='/settings' className="header-link">settings</Link></span>
        </div>
        <div className="header-item-user">
          <span className="material-icons-outlined">
            <Link to='/person' className="header-link">person</Link>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
