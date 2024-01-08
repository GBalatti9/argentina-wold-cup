import { PlayersAndStaffList } from "../components/PlayersAndStaffList"


export const StaffPage = () => {
    return (
        <>
            <h1>Staff</h1>
            <hr />
            <PlayersAndStaffList role={ 'staff' } />
        </>
    )
}
