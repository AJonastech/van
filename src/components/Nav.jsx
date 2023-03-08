import React from 'react'
import {Link} from "react-router-dom"

function Nav() {
    return (
        <header className="header">
          <h1 className='header-title'><Link to="/">#VANLIFE</Link></h1>
          <nav className="nav">
            <p className="nav-links mr-05"><Link to="/about">About</Link></p>
            <p className="nav-links"><Link to="/vans">Vans</Link></p>
          </nav>
        </header>
    )
}

export default Nav
