import {  CATEGORY_DATA_ACTION, CATEGORY_DATA_RECEIVED_ACTION, CATEGORY_DATA_ERROR_ACTION }  from '../constants/Constants';

export const getCategoryData = () => {
    return {
        type: CATEGORY_DATA_ACTION
    }
}

export const getCategoryDataSuccess = genres => {
    return {
        type: CATEGORY_DATA_RECEIVED_ACTION,
        genres
    }
}

export const getCategoryDataFailure = error => {
    return {
        type: CATEGORY_DATA_ERROR_ACTION,
        error
    }
}