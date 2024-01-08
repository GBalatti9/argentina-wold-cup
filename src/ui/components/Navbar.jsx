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

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary">
                        Gaston
                    </span>
                    <button className='nav-item nav-link btn'>Logout</button>
                </ul>
                </div>
            </nav>
        </>
    )
}
