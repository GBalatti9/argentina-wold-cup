import { staff } from '../data/staff';

export const getMemberByRole = ( role ) => {

    const validRoles = ['Player', 'Staff'];

    if( !validRoles.includes(role) ) {
        throw new Error(`${ role } is not a valid role`)
    }

    return staff.filter(( person ) => person.role === role);
}
