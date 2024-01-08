import { getPersonByRole } from "../helpers"


export const PlayersAndStaffList = ({ role }) => {

    const members = getPersonByRole( role );

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            
        </div>
    )
}
