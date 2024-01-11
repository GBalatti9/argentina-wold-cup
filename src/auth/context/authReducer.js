import { actions } from "../actions/actions";


export const authReducer = ( state, action ) => {

    switch (action.type) {
        case actions.login:
            return {
                ...state,
                logged: true,
                user: action.payload

            }
    
        case actions.logout:
            return {
                ...state,
                logged: false,
            }

        case actions.init: 
            return {
                ...state,
                logged: action.payload.logged,
                user: action.payload.user.first_name,
            }
        default:
            state;
    }
}