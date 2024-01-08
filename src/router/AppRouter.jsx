import { Route, Routes } from "react-router-dom";

import { LoginPage, RegisterPage } from "../auth";
import { PlayersAndStaffRoutes } from "../staff";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route path="/*" element={<PlayersAndStaffRoutes />} />
            </Routes>
        </>
    )
}
