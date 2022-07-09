import React from 'react'
import {NavBar} from '../atoms/header/NavBar'
import {SearchBar} from '../atoms/header/SearchBar'

export const Header = () => {
  return (
    <header className="header">
        <NavBar/>
        <SearchBar/>
    </header>
  )
}
