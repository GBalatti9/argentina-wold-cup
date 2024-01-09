import { formData } from "../data/formData"

export const getFormByType = ( type ) => {
    
    return formData.find(( element ) => element.type === type);

}