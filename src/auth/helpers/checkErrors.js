export const checkErrors = ( arrOfInputsRef ) => {

    return arrOfInputsRef.some(( input ) => {
        console.log(input.current);
        return !(input.current.classList.contains('border-success'));
    });

}