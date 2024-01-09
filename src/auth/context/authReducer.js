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
            return console.log('logout');
        default:
            state;
    }
}