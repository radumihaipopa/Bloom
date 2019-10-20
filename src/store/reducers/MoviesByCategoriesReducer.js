import {  MOVIES_BY_CATEGORY_DATA_ACTION, MOVIES_BY_CATEGORY_DATA_RECEIVED_ACTION, MOVIES_BY_CATEGORY_DATA_ERROR_ACTION }  from '../constants/Constants';

const initialState = {
    pending: false,
    movies: [],
    error: null
}

function moviesByCategoryReducer(state = initialState, action) {
    switch(action.type) {
        case MOVIES_BY_CATEGORY_DATA_ACTION: 
            return {
                ...state,
                pending: true
            }
        case MOVIES_BY_CATEGORY_DATA_RECEIVED_ACTION:
            return {
                ...state,
                pending: false,
                movies: action.movies
            }
        case MOVIES_BY_CATEGORY_DATA_ERROR_ACTION:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}
export default moviesByCategoryReducer;