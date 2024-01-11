import { AuthProvider } from "./auth/context/AuthProvider"
import { UserInCookieProvider } from "./context"
import { AppRouter } from "./router/AppRouter"


export const PlayersApp = () => {
    return (
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
    )
}
