import { VIDEO_DATA_ACTION, VIDEO_DATA_RECEIVED_ACTION, VIDEO_DATA_ERROR_ACTION }  from '../constants/Constants';

export const getVideoByIdData = () => {
    return {
        type: VIDEO_DATA_ACTION
    }
}

export const getVideoByIdDataSuccess = video => {
    return {
        type: VIDEO_DATA_RECEIVED_ACTION,
        video
    }
}

export const getVideoByIdDataFailure = error => {
    return {
        type: VIDEO_DATA_ERROR_ACTION,
        error
    }
}