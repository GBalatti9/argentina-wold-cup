import { useEffect, useReducer, useState } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { actions } from "../actions/actions";


const init = async () => {
    // En caso de que el usuario inicie sesión sin presionar en mantener sesión iniciada, se va a intenar buscar en localStorage para que cuando refresque la página, no se le cierre la sesión.
    const user = localStorage.getItem('user');
    console.log(user);
    if ( user ) {
        return {
            logged: true,
            user: user,
        }
    }

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
        console.log("USER", { user });
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
    const [ authState, dispatch ] = useReducer( authReducer, {}, );

    useEffect(() => {
        // console.log(authState);
        if ( !authState.logged ) {
            const loadInitialState = async () => {
                // console.log('me estoy ejecutando');
                const initialState = await init();
                if (!initialState.logged) return;
                dispatch({ type: actions.init, payload: initialState })
            }
    
            loadInitialState();
        } else {
            console.log(authState, 'con sesion iniciada');
        }
    }, [ authState.logged ]);

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
