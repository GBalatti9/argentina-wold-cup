import { AuthProvider } from "./auth/context/AuthProvider"
import { AppRouter } from "./router/AppRouter"


export const PlayersApp = () => {
    console.log('Funcionando correctamente');
    return (
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
    )
}
