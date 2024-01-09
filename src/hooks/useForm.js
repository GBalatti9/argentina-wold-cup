import { useState } from "react"


export const useForm = ( initialForm = {} ) => {

    const [ formState, setformState] = useState( initialForm );

    const handleInputChange = ({ target }) => {
        const { name, value } = target;

        setformState({
            ...formState,
            [ name ]: value,
        });
    }

    const handleResetForm = () => {
        setformState( initialForm );
    }

    return { 
        ...formState,
        formState,
        handleInputChange,
        handleResetForm,
    }
}
