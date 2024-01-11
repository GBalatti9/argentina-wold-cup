
export const fetchLogout = async () => {
    try {
        const response = await fetch('http://localhost:3000/logout', {
            method: 'POST',
            credentials: 'include',
        })
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error( error );
    }
}