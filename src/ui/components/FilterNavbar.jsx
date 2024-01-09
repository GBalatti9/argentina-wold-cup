import { useState } from "react"
import { staff } from "../../staff/data/staff";

export const FilterNavbar = () => {
    const [ filter, setFilter ] = useState(null);
    const [ playersFiltered , setPlayersFiltered ] = useState([]);

    const handleClick = ( filterClicked ) => {
        setFilter(filterClicked);
        const wordToFilter = filterClicked.slice(0, -1).toLowerCase();
        const players = staff.filter(( player ) => player.role !== 'staff');
        const playersFilterByPosition = players.filter(( player ) => player.position === wordToFilter);
        return playersFilterByPosition;
    }

    return (
        <>
            <nav className="mb-3">
                <ul className="list-group list-group-horizontal text-center">
                    <li 
                        className = {`cursor-pointer list-group-item col-3 ${ filter === 'Goalkeepers' ? 'active' : '' } `} 
                        onClick   = { () => handleClick('Goalkeepers') }>
                            Goalkeepers
                    </li>
                    <li 
                        className = {`cursor-pointer list-group-item col-3 ${ filter === 'Defenders' ? 'active' : '' }`}
                        onClick   = { () => handleClick('Defenders') }>
                            Defenders
                    </li>
                    <li 
                        className = {`cursor-pointer list-group-item col-3 ${ filter === 'Midfielders' ? 'active' : '' }`}
                        onClick   = { () => handleClick('Midfielders') }>
                            Midfielders
                    </li>
                    <li 
                        className = {`cursor-pointer list-group-item col-3 ${ filter === 'Strikers' ? 'active' : '' }`}
                        onClick   = { () => handleClick('Strikers') }>
                            Strikers
                    </li>
                </ul>
            </nav>

        </>
    )
}
