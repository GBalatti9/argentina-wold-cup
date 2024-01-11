import { useEffect, useState } from "react";
import { UserInCookieContext } from "./UserInCookieContext"


export const UserInCookieProvider = ({ children }) => {

    const [ userIsLogged, setUserIsLogged ] = useState({
        user: {},
        logged: false,
    })

    const fetchUserInfo = async () => {

        setUserIsLogged(( prevUserIsLogged ) => ({
            ...prevUserIsLogged,
            logged: false,
        }))

        try {
            const response = await fetch('http://localhost:3000/user', {
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            if (data.error) return
            setUserIsLogged(( prevUserIsLogged ) => ({
                ...prevUserIsLogged,
                user: data,
                logged: true,
            }))
            const { first_name } = data.success;
            console.log( first_name );
            localStorage.setItem( 'user', JSON.stringify(first_name) )
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchUserInfo();
    }, [])


    return (
        <UserInCookieContext.Provider value={{ userIsLogged }}>
            { children }
        </UserInCookieContext.Provider>
    )
}
