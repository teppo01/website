import React from "react";
import { slide as Menu } from 'react-burger-menu'
import './NavMenu.css'

class MobileNav extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu right>
        <a className="menu-item" href="/">Etusivu</a>
        <a className="menu-item" href="/palvelut">Palvelut</a>
        <a className="menu-item" href="/tietoa">Tietoja</a>
		<a className="menu-item" href="/yhteystiedot">Yhteystiedot</a>
      </Menu>
    );
  }
}

export default MobileNav;