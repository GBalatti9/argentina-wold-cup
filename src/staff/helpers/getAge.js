
export const getAge = ( birthdate ) => {

    const today = new Date();
    const birthday = new Date(birthdate);

    const diference = today - birthday

    const age = Math.floor(diference / (1000 * 60 * 60 * 24 * 365.25));

    return age;
}