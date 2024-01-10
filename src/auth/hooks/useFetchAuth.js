import { useEffect, useState } from "react";

export const useFetchAuth = (apiUrl) => {
    console.log('estoy en el fetch');
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });

    const getApi = async () => {
        setState({
            ...state,
            isLoading: true
        });

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            console.log({ data });
            setState({
                ...state,
                data: data,
                isLoading: false,
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getApi();
    }, [apiUrl]);

    return {
        data: state.data,
    };
};
