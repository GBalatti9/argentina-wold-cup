


export const validateInputs = () => {

    const isEmail = ( value ) => {
        return value.includes('@') && value.includes('.');
    }

    const isPassword = ( value ) => {
        const lengthGraterThan8 = value.length >= 8;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/;
        const conditions = passwordRegex.test(value);
        
        return lengthGraterThan8 && conditions;
    }

    const comparePasswords = ( passwordValue, checkPasswordValue ) => {
        return passwordValue === checkPasswordValue;
    }

    return {
        isEmail,
        isPassword,
        comparePasswords,
    }
}
