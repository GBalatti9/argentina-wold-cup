import { AuthContext } from "./AuthContext"


export const AuthProvider = ({ children }) => {


    return (
        <AuthContext.Provider>
            { children }
        </AuthContext.Provider>
    )
}
