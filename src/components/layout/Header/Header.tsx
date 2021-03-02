import "./Header.scss";

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
          <span className="material-icons-outlined">refresh</span>
        </div>
        <div className="header-item-listview">
          <span className="material-icons-outlined">view_list</span>
        </div>
        <div className="header-item-settings">
          <span className="material-icons-outlined">settings</span>
        </div>
        <div className="header-item-user">
          <span className="material-icons-outlined">person</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
