import React, {useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import SAXDAX from '../../pictures/saxdax_logo.png'


function NavBar() {
    const [navbar, setNavBar] = useState(false)

    const links = [
        {
            id: 1,
            to: '/',
            label: 'Hem',
            activeClassName: 'selectedLink',
            exact: true
        },

        {
            id: 2,
            to: '/Kontakt',
            label: "Kontakt",
            activeClassName: "selectedLink"
            
        },

        {
            id: 3,
            to: "/Boka",
            label: "Boka",
            activeClassName: "selectedLink"
        }
    ]

    const changeBackground = () => {
        if (window.scrollY >= 85) {
            setNavBar(true)
            console.log("current scroll" + window.scrollY)
        } else {
            setNavBar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    const mapFunction = links.map((items, id) => {
        return (
            <li key={id}>
                <NavLink
                to={items.to}
                activeClassName={items.activeClassName}
                exact={items.exact}
                >
                    {items.label}
                </NavLink>
            </li>
        )
    })

    return (
        <nav className={navbar ? 'nav active' : 'nav'}>
            <img src={SAXDAX} alt="saxdax logo" className='logo'/>
            <ul>
                {mapFunction}
            </ul>
        </nav>
    )
}

export default NavBar
