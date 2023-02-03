import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import * as FaIcons from 'react-icons/fa'

import * as AiIcons from 'react-icons/ai'
import { NavBarData } from './NavBarData'
import { IconContext } from 'react-icons'
import Logo1 from '../images/C-logo-new.png'

//hay kaan shortcut badel icon l 3ade w baaden bethot faicons.lbadakyeh

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    // hayde l exclamation fo2 kaan reversing men true la false w aakes w hek

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <Link to="/Challenge">
                        <button className="game-button">Challenge Me</button>
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        <Link to="/">
                            <img className="logo" src={Logo1} alt="logo" />
                        </Link>
                        {NavBarData.map((item, index) => {
                            return (
                                <li key={index} className={item.className}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
