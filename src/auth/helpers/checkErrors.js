export const checkErrors = ( arrOfInputsRef ) => {

    return arrOfInputsRef.some(( input ) => {
        return !(input.current.classList.contains('border-success'));
    });

}