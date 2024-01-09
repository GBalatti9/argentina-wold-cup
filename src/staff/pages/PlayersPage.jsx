import { PlayersFilteredProvider } from "../../context"
import { FilterNavbar } from "../../ui/components"
import { PlayersAndStaffList } from "../components/PlayersAndStaffList"


export const PlayersPage = () => {
    return (
        <>
            <h1>Players</h1>
            <hr />
            <PlayersFilteredProvider>
                <FilterNavbar />
                <PlayersAndStaffList role={ 'Player' } />
            </PlayersFilteredProvider>
        </>
    )
}
