import { Navigate, Route, Routes } from "react-router-dom";

import { ForgetPasswordPage, LoginPage, RegisterPage } from "../auth";
import { PlayersAndStaffRoutes } from "../staff";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route element = { <Navigate to="/login" replace /> } />

                <Route path="/login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>

                } />
                <Route path="/register" element={
                    <PublicRoute>
                        <RegisterPage />
                    </PublicRoute>

                } />

                <Route path="/forgetPassword" element={
                    <PublicRoute>
                        <ForgetPasswordPage />
                    </PublicRoute>
                } />

                <Route path="/*" element={
                    <PrivateRoute>
                        <PlayersAndStaffRoutes />
                    </PrivateRoute>
                } />
            </Routes>
        </>
    )
}
