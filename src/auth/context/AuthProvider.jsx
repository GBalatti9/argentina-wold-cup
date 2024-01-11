import { useContext, useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { actions } from "../actions/actions";
import { UserInCookieContext } from "../../context";


const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user,
        user: user,
    }
}
export const AuthProvider = ({ children }) => {

    const { userIsLogged } = useContext(UserInCookieContext);
    console.log({ userIsLogged });

    const [ authState, dispatch ] = useReducer( authReducer, {}, init );

    const login = ( loginState ) => {
        if ( Object.keys(loginState).length === 0) return;

        const user = loginState;
        const action = { type: actions.login, payload: user.firstName }
        dispatch( action );
        localStorage.setItem( 'user', JSON.stringify(user.firstName) )
    }

    const logout = () => {
        localStorage.removeItem('user');
        const action = { type: actions.logout };
        dispatch( action )
    }

    return (
        <AuthContext.Provider value={{ login, authState, logout }}>
            { children }
        </AuthContext.Provider>
    )
}
