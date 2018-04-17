import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const HeaderView = ({
  onMenuClick,
  activeClass,
}) => (
    <nav className="Header navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img className="Header-logo" src="" alt="ARCOMM" />
          <h1 className="is-size-4">
            ARCOMM
          </h1>
        </Link>
        <div className={`navbar-burger burger ${activeClass}`} onClick={onMenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`navbar-menu ${activeClass}`}>
        <div className="navbar-end">
          <Link to="/missions" className="navbar-item">
            Missions
          </Link>
          <a className="navbar-item" target="_blank" href="https://github.com/Jaegerhaus/arcomm-web/issues">
            Help
          </a>
        </div>
      </div>
    </nav>
);

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  onMenuClick(e) {
    e && e.preventDefault();
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  }

  render() {
    return HeaderView({
      onMenuClick: this.onMenuClick.bind(this),
      activeClass: this.state.isMenuOpen ? "is-active" : "",
    });
  }
}

export default Header;
