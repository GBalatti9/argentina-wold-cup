import { useContext } from "react"
import { PlayersFilteredContext } from "../../context";

import './FilterNavBar.css';

export const FilterNavbar = () => {
    
    const { filter, handleFilter } = useContext(PlayersFilteredContext);

    return (
        <>
            <nav className="mb-3">
                <ul className="list-group list-group-horizontal text-center d-flex justify-content-center">
                    <li 
                        className = {`cursor-pointer list-group-item col ${ filter === 'Goalkeepers' ? 'active' : '' } `} 
                        onClick   = { () => handleFilter('Goalkeepers') }>
                            Goalkeepers
                    </li>
                    <li 
                        className = {`cursor-pointer list-group-item col ${ filter === 'Defenders' ? 'active' : '' }`}
                        onClick   = { () => handleFilter('Defenders') }>
                            Defenders
                    </li>
                    <li 
                        className = {`cursor-pointer list-group-item col ${ filter === 'Midfielders' ? 'active' : '' }`}
                        onClick   = { () => handleFilter('Midfielders') }>
                            Midfielders
                    </li>
                    <li 
                        className = {`cursor-pointer list-group-item col ${ filter === 'Strikers' ? 'active' : '' }`}
                        onClick   = { () => handleFilter('Strikers') }>
                            Strikers
                    </li>
                    <li 
                        className = {`cursor-pointer list-group-item col ${ filter === 'None' ? 'active' : '' }`}
                        onClick   = { () => handleFilter('None') }>
                            All
                    </li>
                </ul>
            </nav>

        </>
    )
}
