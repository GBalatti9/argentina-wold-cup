import { staff } from '../data/staff';

export const getPersonByRole = ( role ) => {

    const validRoles = ['player', 'staff'];

    if( !validRoles.includes(role) ) {
        throw new Error(`${ role } is not a valid role`)
    }

    return staff.filter(( person ) => person.role === role);
}
