

export const fetchApi = async ( type, formData = {} ) => {
    // 'http://localhost:3000/auth/google';

    let url = '';

    switch (type) {
        case 'register':
            // url = 'http://localhost:3000/register'

            // Production
            url = 'https://signup-login-qaz1.onrender.com/register'
            break;
        
        case 'login':
            // url = 'http://localhost:3000/login'

            // Production
            url = 'https://signup-login-qaz1.onrender.com/login'
            break;
        
        case 'register with gmail':
            // url = 'http://localhost:3000/auth/google'

            // Production
            url = 'https://signup-login-qaz1.onrender.com/auth/google'
            break;

        case 'login with gmail':
            // url = 'http://localhost:3000/auth/google'

            // Production
            url = 'https://signup-login-qaz1.onrender.com/auth/google'
            break;

        case 'forget':
            // url = 'http://localhost:3000/forgot-password'

            // Production
            url = 'https://signup-login-qaz1.onrender.com/forgot-password'
            break;
    
        default:
            return url
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
        const newType = type.split(' ')[0];
        const urlWithParams = `${url}/${newType}`

        const response = await fetch(urlWithParams, {
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
