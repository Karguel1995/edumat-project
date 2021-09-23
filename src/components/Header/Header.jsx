import "./Header.css";

import logo from "../../assets/Logo-footer.svg";
import overlap from "../../assets/heart-icon.png";
import search from "../../assets/search-button.png";
import notification from "../../assets/notification-icon.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__bar">
        <img src={logo} alt="Logo" />
        <div className="header__elements">
          <img src={search} alt="" />
          <img src={overlap} alt="" />
          <img src={notification} alt="" />
        </div>
      </div>
      <div className="header__menu">
        <p className="header__item header__item--active">Summary</p>
        <p className="header__item">Activity</p>
      </div>
    </header>
  );
};

export default Header;
