

export const setInputsColor = () => {

    const isOkColor = ( ref ) => {
        ref.current.classList.remove('border', 'border-danger');
        ref.current.classList.add('border', 'border-success');
    }

    const hasErrorColor = ( ref ) => {
        ref.current.classList.remove('border', 'border-success');
        ref.current.classList.add('border', 'border-danger');
    }

    return {
        isOkColor,
        hasErrorColor,
    }
}
