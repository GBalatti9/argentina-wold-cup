import { FilterNavbar } from "../../ui/components"
import { PlayersAndStaffList } from "../components/PlayersAndStaffList"


export const PlayersPage = () => {
    return (
        <>
            <h1>Players</h1>
            <hr />
            <FilterNavbar />
            <PlayersAndStaffList role={ 'player' } />
        </>
    )
}
