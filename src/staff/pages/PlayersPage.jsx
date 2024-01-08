import { PlayersAndStaffList } from "../components/PlayersAndStaffList"


export const PlayersPage = () => {
    return (
        <>
            <h1>Players</h1>
            <hr />
            <PlayersAndStaffList role={ 'player' } />
        </>
    )
}
