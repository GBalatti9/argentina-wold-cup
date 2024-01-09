import { staff } from "../data/staff"

export const getMemberByName = ( infoFromInput ) => {

    infoFromInput = infoFromInput.toLowerCase().trim();

    if ( infoFromInput.length === 0 ) return [];

    const matchingMembers = staff.filter(( member ) => {
        const fullName = `${ member.name } ${ member.lastName }`.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const firstName = member.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const lastName = member.lastName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        return (
            fullName.toLowerCase().includes(infoFromInput.normalize("NFD").replace(/[\u0300-\u036f]/g, "")) ||
            firstName.includes(infoFromInput.normalize("NFD").replace(/[\u0300-\u036f]/g, "")) ||
            lastName.includes(infoFromInput.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
        )
    })

    return matchingMembers;

}