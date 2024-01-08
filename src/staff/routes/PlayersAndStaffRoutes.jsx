import { Navigate, Route, Routes } from "react-router-dom"
import { PlayersPage, StaffPage } from "../pages"


export const PlayersAndStaffRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/players" element={ <PlayersPage /> } />
                <Route path="/staff" element={ <StaffPage /> } />

                <Route path="/" element={ <Navigate to='/players' /> } />
            </Routes>
        </>
    )
}
