import { useContext } from "react"
import { AuthContext } from "../auth/context"
import { Navigate } from "react-router-dom";


export const PrivateRoute = ({ children }) => {

    const { authState } = useContext(AuthContext);
    const { logged } = authState;

    return logged ? children : <Navigate to = '/login' />
}
