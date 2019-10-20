import { VIDEO_DATA_ACTION, VIDEO_DATA_RECEIVED_ACTION, VIDEO_DATA_ERROR_ACTION }  from '../constants/Constants';

const initialState = {
    pending: false,
    video: [],
    error: null
}

function videosReducer(state = initialState, action) {
    switch(action.type) {
        case VIDEO_DATA_ACTION: 
            return {
                ...state,
                pending: true
            }
        case VIDEO_DATA_RECEIVED_ACTION:
            return {
                ...state,
                pending: false,
                video: action.video
            }
        case VIDEO_DATA_ERROR_ACTION:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}
export default videosReducer;