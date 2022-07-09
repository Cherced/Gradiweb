import React from 'react'

export const SearchBar = () => {
  return (
    <div className="searchBar__container" aria-label="container search bar">
    <div className="header-input-container">
    <input type="text" placeholder="Search..." />
    <span className="search-icon" />
    </div>
     <div className="cart-icon"><a href /></div>
    </div>
  )
}
