

export const fetchApi = async ( type, formData ) => {

    const url = type === 'register' ? 'http://localhost:3000/register' : 'http://localhost:3000/login';

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
            return data;
        } catch (error) {
            console.error('Error al realizar la solicitud:', error.message);
        }
}
