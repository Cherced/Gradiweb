import React from 'react'

export const NavBar = () => {
  return (
    <div className="navBar__container">
    <div className="navBar__container--image">
    <img src="/images/logo-white.png" alt="Logo Converse" />
    <nav className="header__nav">
      <ul className="header__nav--list">
        <li className="header__list--item"><a href="#">New Releases</a></li>
        <li className="header__list--item"><a href="#">Men</a></li>
        <li className="header__list--item"><a href="#">Woman</a></li>
        <li className="header__list--item"><a href="#">Kids</a></li>
        <li className="header__list--item"><a href="#">Customize</a></li>
      </ul>
    </nav>
  </div>
</div>
  )
}
