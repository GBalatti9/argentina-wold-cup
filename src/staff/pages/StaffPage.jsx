import { PlayersFilteredProvider } from "../../context"
import { PlayersAndStaffList } from "../components/PlayersAndStaffList"


export const StaffPage = () => {
    return (
        <>
            <h1>Staff</h1>
            <hr />
            <PlayersFilteredProvider>
                <PlayersAndStaffList role={ 'staff' } />
            </PlayersFilteredProvider>
        </>
    )
}
