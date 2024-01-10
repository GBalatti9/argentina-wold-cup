import { setInputsColor } from "./setInputsColor";
import { validateInputs } from "./validateInputs";


export const handleInputsValidation =  ( name, value, ref, formState ) => {
    const { isEmail, isPassword, comparePasswords } = validateInputs();
    const { isOkColor, hasErrorColor } = setInputsColor();

    const isValidField = value.trim().length > 0;

        if (isValidField) {
            if (name === 'email') {
                const checkEmail = isEmail(value);
                    if ( checkEmail ) {
                        isOkColor(ref);
                    } else {
                        hasErrorColor(ref);
                    }

        } else if (name === 'password') {
            const checkPassword = isPassword(value);
            if ( checkPassword ) {
                isOkColor(ref);
                } else {
                hasErrorColor(ref);
            }

        } else if (name === 'checkPassword') {
            const passwordValue = formState['password'];
            const checkPasswordValue = value;
            const passwordMatch = comparePasswords(passwordValue, checkPasswordValue);
            if ( passwordMatch ) {
                isOkColor(ref);
                } else {
                hasErrorColor(ref);
            }
        } else {
            isOkColor(ref)
        }
        } else {
            hasErrorColor(ref)
        }
}
