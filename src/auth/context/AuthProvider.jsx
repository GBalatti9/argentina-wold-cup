import { useEffect, useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { actions } from "../actions/actions";


const init = async () => {
    // const user = JSON.parse(localStorage.getItem('user'));

    try {
        const response = await fetch('http://localhost:3000/user', {
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.error) {
            return {
                logged: false,
                user: null,
            }
        }

        const user = data.success;

        localStorage.setItem( 'user', JSON.stringify(user.first_name) );

        return {
            logged: true,
            user: user
        }


    } catch (error) {
        console.error(error);
        return {
            logged: false,
            user: null,
        }
    }
    
}
export const AuthProvider = ({ children }) => {

    // const [ authState, dispatch ] = useReducer( authReducer, {}, () => Promise.resolve( init() ) );
    const [ authState, dispatch ] = useReducer( authReducer, {
        logged: false,
        user: null
    });

    useEffect(() => {
        const loadInitialState = async () => {
            const initialState = await init();
            if (!initialState.logged) return;
            dispatch({ type: actions.init, payload: initialState })
        }

        loadInitialState();
    }, []);

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
