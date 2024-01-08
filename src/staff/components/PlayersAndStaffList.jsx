import { getPersonByRole } from "../helpers"
import { PlayersAndStaffCard } from "./PlayersAndStaffCard";


export const PlayersAndStaffList = ({ role }) => {

    const members = getPersonByRole( role );

    return (
        <div className="row rows-cols-1 row-cols-md-3">
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
