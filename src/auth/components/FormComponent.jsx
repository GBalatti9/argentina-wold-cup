import { useNavigate } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
import { useForm } from "../../hooks/useForm";

import { AuthContext } from "../context/AuthContext";
import { getFormByType, validateInputs, setInputsColor, checkErrors, handleInputsValidation }  from "../helpers"


export const FormComponent = ({ type }) => {

    const { login } = useContext(AuthContext);

    const [ disabled, setDisabled ] = useState(true);

    const navigate = useNavigate();
    const { formState, handleInputChange } = useForm();
    
    const formElements = getFormByType( type );
    const { type: formType, inputs } = formElements ? formElements : [];
    const inputsRefs = inputs.map(() => useRef()); 


    const handleInputValidate = ( e, ref ) => {
        const { name, value } = e.target;
        handleInputsValidation( name, value, ref, formState );

        !checkErrors(inputsRefs) ? setDisabled(false) : setDisabled(true);

    };


    const handleSubmit = ( e, formType ) => {
        e.preventDefault();
        
        if (formType === 'register') {
            console.log('ESTOY EN REGISTER');
            return navigate('/login');
        }
        
        if (formType === 'login') {
            const lastPathVisited = localStorage.getItem('lastPath') || '/';
            login( formState );
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
                    inputs.map(( input, i ) => (
                        <div key={ input.name + formType } >
                        <label className="form-label" htmlFor={ input.name }>{ input.label }</label>
                        <input
                            type = { input.type }
                            name = { input.name }
                            id   = { input.name }
                            ref = { inputsRefs[i] }
                            className={`form-control mb-1 ${
                                input.type !== 'checkbox' ?  ''
                                : 'form-check-input'
                            }`}
                            onChange  = {
                                ( e ) => {
                                        handleInputChange( e )
                                        handleInputValidate( e, inputsRefs[i] ) 
                                    }
                                }
                            />
                        </div>
                    ))
                }
                <button type = 'submit' className = {`btn btn-primary mt-3 mb-3 align-self-center px-4 ${ disabled ? 'disabled' : '' } `} > 
                    { formType === 'register' ? 'Register' : 'Login' }
                </button>

            </form>
        </div>
    )
}
