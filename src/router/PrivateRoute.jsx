import { useContext } from "react"
import { AuthContext } from "../auth/context"
import { Navigate, useLocation } from "react-router-dom";


export const PrivateRoute = ({ children }) => {

    const { authState } = useContext(AuthContext);
    const { logged } = authState;
    const { pathname, search } = useLocation();
    const lastPathVisited = pathname + search;

    localStorage.setItem('lastPath', lastPathVisited);


    return logged ? children : <Navigate to = '/login' />
}
