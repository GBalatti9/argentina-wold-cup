import { Navigate, Route, Routes } from "react-router-dom"
import { PlayersPage, StaffPage, TeamMemberPage } from "../pages"
import { Navbar } from "../../ui"


export const PlayersAndStaffRoutes = () => {
    return (
        <>
            <Navbar />
            
            <Routes>
                <Route path="players" element={ <PlayersPage /> } />
                <Route path="staff" element={ <StaffPage /> } />

                <Route path="/:teamMember/:id" element={ <TeamMemberPage /> } />

                <Route path="/" element={ <Navigate to='/players' /> } />
            </Routes>
        </>
    )
}
