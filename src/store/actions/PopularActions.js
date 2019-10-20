import { POPULAR_DATA_ACTION, POPULAR_DATA_RECEIVED_ACTION, POPULAR_DATA_ERROR_ACTION }  from '../constants/Constants';

export const getPopularData = () => {
    return {
        type: POPULAR_DATA_ACTION
    }
}

export const getPopularDataSuccess = data => {
    return {
        type: POPULAR_DATA_RECEIVED_ACTION,
        data
    }
}

export const getPopularDataFailure = error => {
    return {
        type: POPULAR_DATA_ERROR_ACTION,
        error
    }
}
