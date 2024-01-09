import { useState } from "react";
import { PlayersFilteredContext } from "./PlayersFilteredContext"
import { staff } from "../staff/data/staff";
import { getMemberByRole } from "../staff/helpers";


export const PlayersFilteredProvider = ({ children }) => {

    const [ filter, setFilter ] = useState(null);

    const handleFilter = (filterClicked) => {
        setFilter(filterClicked);
    }

    const applyFilter = ( filterClicked = '', role ) => {
        const members = getMemberByRole( role );
        if (filter && filter !== 'None') {
            const wordToFilter = filterClicked.slice(0, -1).toLowerCase();
            const playersFilterByPosition = members.filter(( player ) => player.position === wordToFilter);
            return playersFilterByPosition;
        } else {
            return members;
        }
    }

    return (
        <PlayersFilteredContext.Provider value={{ filter, handleFilter, applyFilter }}>
            { children }
        </PlayersFilteredContext.Provider>
    )
}
