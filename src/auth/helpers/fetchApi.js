

export const fetchApi = async ( type, formData ) => {
    

    const url = type === 'register' ? 'http://localhost:3000/register' : 'http://localhost:3000/login';
    
    if ( type === 'login' ) {
        formData = {
            ...formData,
            submitType: 'login'
        }
    }

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify( formData )
            });

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error('Error al realizar la solicitud:', error.message);
        }
}
