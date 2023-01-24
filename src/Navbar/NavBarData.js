import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const NavBarData = [
    {
        title: 'Home',
        path: '/',
        icon:<AiIcons.AiFillHome />,
        className: 'nav-text'
    },
        {
        title: 'About',
        path: '/About',
        icon:<FaIcons.FaUser />,
        className: 'nav-text'
    },
        {
        title: 'Contact',
        path: '/Contact',
        icon:<FaIcons.FaEnvelope />,
        className: 'nav-text'
    },
]