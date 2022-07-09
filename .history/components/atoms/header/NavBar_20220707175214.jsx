import React from 'react'

export const NavBar = () => {
  return (
    <div className="container">
    <div className="header-left">
    <img src="./icons/Converse-Logo.png" alt="Logo Converse" height={50} />
    <nav className="header-menu">
      <ul>
        <li><a href="#">New Releases</a></li>
        <li><a href="#">Men</a></li>
        <li><a href="#">Woman</a></li>
        <li><a href="#">Kids</a></li>
        <li><a href="#">Customize</a></li>
      </ul>
    </nav>
  </div>
</div>
  )
}
