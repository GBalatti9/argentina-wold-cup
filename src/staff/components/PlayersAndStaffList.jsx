
import { getMemberByRole } from "../helpers";
import { PlayersAndStaffCard } from "./PlayersAndStaffCard";


export const PlayersAndStaffList = ({ role }) => {

    const members = getMemberByRole( role );

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-1">
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
