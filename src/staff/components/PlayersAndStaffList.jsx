
import { useContext } from "react";
import { getMemberByRole } from "../helpers";
import { PlayersAndStaffCard } from "./PlayersAndStaffCard";
import { PlayersFilteredContext } from "../../context";


export const PlayersAndStaffList = ({ role }) => {

    const { applyFilter, filter } = useContext( PlayersFilteredContext );
    const members = applyFilter( filter, role );
    
    return (
        <div className="row rows-cols-1 row-cols-md-3 g-1 mb-4">
            {
                members.map(( member ) => (
                        <PlayersAndStaffCard 
                            key={ member.id }
                            { ...member }
                        />
                ))
            }
        </div>
    )
}
