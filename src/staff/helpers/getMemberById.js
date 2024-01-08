import { staff } from "../data/staff"


export const getMemberById = ( id ) => {
    return staff.find(( member ) => member.id === id);
}