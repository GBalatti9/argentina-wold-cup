import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";

import { getFormByType } from "../helpers";
import { AuthContext } from "../context/AuthContext";


export const FormComponent = ({ type }) => {

    const { login } = useContext(AuthContext);

    const navigate = useNavigate();
    const { formState, handleInputChange } = useForm();

    const formElements = getFormByType( type );
    const { type: formType, inputs } = formElements ? formElements : [];

    const handleSubmit = ( e, formType ) => {
        e.preventDefault();
        login( formState );

        if (formType === 'register') navigate('/login');
        if (formType === 'login') {
            const lastPathVisited = localStorage.getItem('lastPath') || '/';
            return navigate(lastPathVisited);
        };
    }

    return (
        <div className="card col-sm-12 col-md-5 mx-auto mt-4 container bg-light">
            <h2 className="text-center pt-3"> 
                { formType === 'register' ? 'Register' : 'Login' }
            </h2>
            <hr />
            <form className="d-flex flex-column" onSubmit={( e ) => handleSubmit( e, formType ) }>
                {
                    inputs.map(( input ) => (
                        <div key={ input.name + formType }>
                        <label className="form-label" htmlFor={ input.name }>{ input.label }</label>
                        <input
                            type = { input.type }
                            name = { input.name }
                            id   = { input.name }
                            className={ input.type !== 'checkbox' ? 'form-control mb-1' : 'form-check-input mx-2'}
                            onChange={ handleInputChange }
                            />
                        </div>
                    ))
                }
                <button type = 'submit' className = "btn btn-primary mt-3 mb-3 align-self-center px-4"> 
                    { formType === 'register' ? 'Register' : 'Login' }
                </button>
            </form>
        </div>
    )
}
