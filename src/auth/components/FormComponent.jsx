import { useNavigate } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
import { useForm } from "../../hooks/useForm";

import { AuthContext } from "../context/AuthContext";
import { getFormByType, validateInputs, setInputsColor, checkErrors }  from "../helpers"


export const FormComponent = ({ type }) => {

    const { login } = useContext(AuthContext);

    const [ validation, setValidation ] = useState({});    
    const [ touched, setTouched ] = useState({});
    const [ disabled, setDisabled] = useState(true);

    const { isEmail, isPassword, comparePasswords } = validateInputs();
    const navigate = useNavigate();
    const { formState, handleInputChange } = useForm();
    
    const formElements = getFormByType( type );
    const { type: formType, inputs } = formElements ? formElements : [];
    const inputsRefs = inputs.map(() => useRef()); 
    const { isOkColor, hasErrorColor } = setInputsColor();


    const handleInputValidate = ( e, ref ) => {
        const { name, value } = e.target;
        const isValidField = value.trim().length > 0;

        setTouched((prev) => ({ ...prev, [name]: true }));

        if (isValidField) {
            if (name === 'email') {
                const checkEmail = isEmail(value);
                    if ( checkEmail ) {
                        isOkColor(ref);
                    } else {
                        hasErrorColor(ref);
                    }
                setValidation((prev) => ({ ...prev, [name]: checkEmail }));

        } else if (name === 'password') {
            const checkPassword = isPassword(value);
            if ( checkPassword ) {
                isOkColor(ref);
                } else {
                hasErrorColor(ref);
            }

            setValidation((prev) => ({ ...prev, [name]: checkPassword }));
        } else if (name === 'checkPassword') {
            const passwordValue = formState['password'];
            const checkPasswordValue = value;
            const passwordMatch = comparePasswords(passwordValue, checkPasswordValue);
            if ( passwordMatch ) {
                isOkColor(ref);
                } else {
                hasErrorColor(ref);
            }
            setValidation((prev) => ({ ...prev, [name]: passwordMatch }));
        } else {
            isOkColor(ref)
            setValidation((prev) => ({ ...prev, [name]: isValidField }));
        }
        } else {
            setValidation((prev) => ({ ...prev, [name]: false }));
            hasErrorColor(ref)
        }

        !checkErrors(inputsRefs) ? setDisabled(false) : setDisabled(true);

    };


    const handleSubmit = ( e, formType ) => {
        e.preventDefault();
        console.log({ validation });
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
                        <div key={ input.name + formType } >
                        <label className="form-label" htmlFor={ input.name }>{ input.label }</label>
                        <input
                            type = { input.type }
                            name = { input.name }
                            id   = { input.name }
                            ref = { inputsRefs[i] }
                            className={`form-control mb-1 ${
                                input.type !== 'checkbox' ?  ''
                                // touched[input.name] 
                                //     && (validation[input.name] !== undefined ? validation[input.name] : true)
                                //         ? "border border-success"
                                //         : touched[input.name]
                                //         ? "border border-danger"
                                //         : ""
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
