
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
import { useForm } from "../../hooks/useForm";

import { AuthContext } from "../context/AuthContext";

import { getFormByType, checkErrors, handleInputsValidation, fetchApi }  from "../helpers";

export const FormComponentCard = ({ type }) => {

    const formElements = getFormByType( type );

    const { login } = useContext(AuthContext);

    const [ disabled, setDisabled ] = useState(true);
    const [ formSent, setFormSent ] = useState(false);
    const [ errors, setErrors ]     = useState([])
    const [ filteredInputsRefs, setFilteredInputsRefs ] = useState([])

    const navigate = useNavigate();
    const { formState, handleInputChange } = useForm();
    
    const { type: formType, inputs } = formElements ? formElements : [];
    let inputsRefs = inputs.map(() => useRef())
    useEffect(() => {
        const filteredRefs = inputsRefs.filter((ref) => {
            return !ref.current.classList.contains('form-check-input');
        });
    
        setFilteredInputsRefs([...filteredRefs]);
    
        return () => {};
    }, []);
    
    const handleInputValidate = ( e, ref ) => {
        const { name, value } = e.target;
        handleInputsValidation( name, value, ref, formState );
        !checkErrors(filteredInputsRefs) ? setDisabled(false) : setDisabled(true);
    };
    
    const handleSubmit = async ( e, formType ) => {
        e.preventDefault();
        // console.log({ formSent });
        
        if (formType === 'register') {
            try {                
                const sendData = await fetchApi( formType, formState );

                if(sendData.errors.length === 0) {
                    return navigate('/login');
                } else {
                    setErrors(sendData.errors)
                }

            } catch (error) {
                console.error(error);
            }
        }
        
        if (formType === 'login') {
            try {
                const sendData = await fetchApi( formType, formState );

                if (sendData.errors.length === 0) {
                    
                    const lastPathVisited = localStorage.getItem('lastPath') || '/';
                    login( sendData.user );
                    console.log({sendData});
                    setFormSent(true);
                    return navigate(lastPathVisited);
                } else {
                    setErrors(sendData.errors);
                    

                }
                } catch (error) {
                console.error(error)
            }
        };
    }

    return (
        <>
        <h2 className="text-center pt-3"> 
                { formType === 'register' ? 'Register' : formType === 'login' ? 'Login' : 'Reset Password' }
            </h2>
            <hr />
            <form className="d-flex flex-column" onSubmit={( e ) => { handleSubmit( e, formType )} }>
                {
                    inputs.map(( input, i ) => (
                        input.label === 'Mantener sesión iniciada' 
                        ? 
                        <div key={ input.name + formType } className="position-relative w-auto">
                            <label className="form-label" htmlFor={ input.name }>{ input.label }</label>

                            <input
                                type = { input.type }
                                name = { input.name }
                                id   = { input.name }
                                ref = { inputsRefs[i] } 
                                className="form-check-input mx-2"
                                onChange={
                                    ( e ) => {
                                        handleInputChange( e )
                                        handleInputValidate( e, inputsRefs[i] )
                                    }
                                }
                            />
                        </div>

                        :
                        <div key={ input.name + formType } className="position-relative w-auto">
                            <label className="form-label" htmlFor={ input.name }>{ input.label }</label>
                            <input
                                type = { input.type }
                                name = { input.name }
                                id   = { input.name }
                                ref = { inputsRefs[i] }
                                
                            className='form-control mb-1'
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
                <button type = 'submit' className = {`btn btn-primary mt-3 align-self-center px-4 ${ disabled ? 'disabled' : '' } `} > 
                    { formType === 'register' ? 'Register' : formType === 'login' ? 'Login' : 'Reset Password' }
                </button>
                <div className="text-center mt-2 mb-3">

                { formType === 'register'
                    ?
                    <p>
                    Already have an account?
                    <Link to='/login' className="text-dark mx-2">Login</Link>
                    </p>
                    : formType === 'login'
                    ? <Link to='/register' className="text-dark"> Register </Link>
                    : ''
                }
                </div>
                <div className="text-center">

                    {
                        errors.length > 0 && errors.map(( error, i ) => (
                            <p key={ error + i }>{ error }</p>
                        ))
                    }
                </div>
            </form>
        </>
    )
}
