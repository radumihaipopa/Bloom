import { ASSET_BY_ID_DATA_ACTION, ASSET_BY_ID_DATA_RECEIVED_ACTION, ASSET_BY_ID_DATA_ERROR_ACTION }  from '../constants/Constants';

const initialState = {
    pending: false,
    movie: [],
    error: null
}

function assetDetailsReducer(state = initialState, action) {
    switch(action.type) {
        case ASSET_BY_ID_DATA_ACTION: 
            return {
                ...state,
                pending: true
            }
        case ASSET_BY_ID_DATA_RECEIVED_ACTION:
            return {
                ...state,
                pending: false,
                movie: action.movie
            }
        case ASSET_BY_ID_DATA_ERROR_ACTION:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}
export default assetDetailsReducer;