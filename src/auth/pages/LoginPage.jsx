import { FormComponent } from "../components";
import { GmailButton } from "../components/GmailButton";


export const LoginPage = () => {
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <FormComponent type={ 'login' }/>
        </div>
    )
}
