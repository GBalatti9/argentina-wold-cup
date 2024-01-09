import { staff } from "../data/staff"

export const getMemberByName = ( infoFromInput ) => {

    const matchingMembers = staff.filter(( member ) => {
        const fullName = `${ member.name } ${ member.lastName }`.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const firstName = member.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const lastName = member.lastName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        return (
            fullName.toLowerCase().includes(infoFromInput.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) ||
            firstName.includes(infoFromInput.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) ||
            lastName.includes(infoFromInput.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
        )
    })

    return matchingMembers;

}