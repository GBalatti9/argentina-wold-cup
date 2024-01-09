import { AuthProvider } from "./auth/context/AuthProvider"
import { AppRouter } from "./router/AppRouter"


export const PlayersApp = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )
}
