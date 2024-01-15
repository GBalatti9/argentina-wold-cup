
export const fetchLogout = async () => {
    const url = 'https://argentina-world-cup.onrender.com/logout';
    // const url = 'http://localhost:3000/logout';
    try {
        const response = await fetch( url , {
            method: 'POST',
            credentials: 'include',
        })
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error( error );
    }
}