import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { actions } from "../actions/actions";


const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user,
        user: user,
    }
}
export const AuthProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer( authReducer, {}, init );
    console.log({authState});

    const login = ( loginState ) => {
        if ( Object.keys(loginState).length === 0) return;
        // Esto va a tener que verificar en la base de datos si existe un usuario con este mail y comparar la contraseña. En caso de que sea true y exita el usuario, directamente al reducer se le pasa el mail y no la contraseña
        const user = loginState;
        const action = { type: actions.login, payload: user.email }
        dispatch( action );
        localStorage.setItem( 'user', JSON.stringify(user.email) )
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
