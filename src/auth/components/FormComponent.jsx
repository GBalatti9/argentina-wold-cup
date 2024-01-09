import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useForm } from "../../hooks/useForm";

import { getFormByType } from "../helpers";
import { AuthContext } from "../context/AuthContext";
import { validateInputs }  from "../helpers"


export const FormComponent = ({ type }) => {

    const { login } = useContext(AuthContext);

    const [ isValid, setIsValid ] = useState({});
    const [ touched, setTouched ] = useState({});

    const { isEmail, isPassword, comparePasswords } = validateInputs();
    const navigate = useNavigate();
    const { formState, handleInputChange } = useForm();
    
    const formElements = getFormByType( type );
    const { type: formType, inputs } = formElements ? formElements : [];

    const handleInputValidate = ( e ) => {
        const { name, value } = e.target;
        const isValidField = value.trim().length > 0;
        setTouched((prev) => ({ ...prev, [name]: true }));
        
        if( isValidField ) {
            if ( name === 'firstName') setIsValid(( prev ) => ({ ...prev, [name]: isValidField }));
            if ( name === 'lastName') setIsValid(( prev ) => ({ ...prev, [name]: isValidField }));

            if ( name === 'email' ) {
                const checkEmail = isEmail(value);
                setIsValid(( prev ) => ({ ...prev, [name]: checkEmail }))
            }
            if ( name === 'password' ) {
                const checkPassword = isPassword(value);
                setIsValid(( prev ) => ({ ...prev, [name]: checkPassword }))
            }
            if ( name === 'checkPassword' ) {
                const passwordValue = formState['password'];
                const checkPasswordValue = value;
                const passwordMatch = comparePasswords( passwordValue, checkPasswordValue );
                setIsValid(( prev ) => ({ ...prev, [name]: passwordMatch }))
            }
            
        } 
    }

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
                    inputs.map(( input, i ) => (
                        <div key={ input.name + formType }>
                        <label className="form-label" htmlFor={ input.name }>{ input.label }</label>
                        <input
                            type = { input.type }
                            name = { input.name }
                            id   = { input.name }
                            className={`form-control mb-1 ${
                                touched[input.name] && isValid[input.name]
                                    ? "border border-success"
                                    : touched[input.name]
                                    ? "border border-danger"
                                    : ""
                                        }`}
                            onChange  = {
                                ( e ) => {
                                        handleInputChange( e )
                                        handleInputValidate( e ) 
                                    }
                                }
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
