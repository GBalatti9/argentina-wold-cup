

export const fetchApi = async ( type, formData = {} ) => {
    // 'http://localhost:3000/auth/google';

    let url = '';

    switch (type) {
        case 'register':
            url = 'http://localhost:3000/register'
            break;
        
        case 'login':
            url = 'http://localhost:3000/login'
            break;
        
        case 'register with gmail':
            url = 'http://localhost:3000/auth/google'
            break;

        case 'login with gmail':
            url = 'http://localhost:3000/auth/google'
            break;
    
        default:
            url
    }

    // const url = type === 'register' ? 'http://localhost:3000/register' : 'http://localhost:3000/login';
    
    if ( type === 'login' ) {
        formData = {
            ...formData,
            submitType: 'login'
        }
    }

    if (url !== 'http://localhost:3000/auth/google') {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                credentials: 'include',
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

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al realizar la solicitud de Gmail:', error.message);
    }
}
