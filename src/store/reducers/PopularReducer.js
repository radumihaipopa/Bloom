import { POPULAR_DATA_ACTION, POPULAR_DATA_RECEIVED_ACTION, POPULAR_DATA_ERROR_ACTION } from '../constants/Constants';

const initialState = {
    pending: false,
    data: [],
    error: null
}

function popularReducer(state = initialState, action) {
    switch(action.type) {
        case POPULAR_DATA_ACTION: 
            return {
                ...state,
                pending: true
            }
        case POPULAR_DATA_RECEIVED_ACTION:
            return {
                ...state,
                pending: false,
                data: action.data
            }
        case POPULAR_DATA_ERROR_ACTION:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}
export default popularReducer;

//export const getPopularData = state => state.pending;
//export const getPopularDataSuccess = state => state.data;
//export const getPopularDataFailure = state => state.error;