// import { types } from '../types/types';

// const state = {
//     name: 'Archivaldo',
//     logged: true
// }

export const authReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        case 'login':
            return {
                ...action.payload,
                logged: false
            }

        case 'logout':
            return {
                logged: false,
            }
    
        default:
            return state;
    }

}