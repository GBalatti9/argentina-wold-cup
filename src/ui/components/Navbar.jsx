import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export const Navbar = () => {
    const { pathname } = useLocation();

    return (
        <>
            <nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2'>
                <Link
                    className='navbar-brand'
                    to={ pathname === '/players' ? '/staff' : '/' }
                >
                    Argentina
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">
                        <NavLink 
                            className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }` }
                            to='/players' >
                            Players
                        </NavLink>

                        <NavLink className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }` }
                            to='/staff' >
                            Staff
                        </NavLink>
                        
                        <NavLink
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }`}
                        to="/search"
                        >
                        Search
                    </NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}
