import React from 'react'
import Navbar from './navbar'

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 shadow-sm">
      <Navbar />
    </header>
  )
}

export default Header