import { CATEGORY_DATA_ACTION, CATEGORY_DATA_RECEIVED_ACTION, CATEGORY_DATA_ERROR_ACTION } from '../constants/Constants';

const initialState = {
    pending: false,
    genres: [],
    error: null
}

function categoryReducer(state = initialState, action) {
    switch(action.type) {
        case CATEGORY_DATA_ACTION: 
            return {
                ...state,
                pending: true
            }
        case CATEGORY_DATA_RECEIVED_ACTION:
            return {
                ...state,
                pending: false,
                genres: action.genres
            }
        case CATEGORY_DATA_ERROR_ACTION:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}
export default categoryReducer;