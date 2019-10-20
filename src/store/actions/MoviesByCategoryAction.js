import {  MOVIES_BY_CATEGORY_DATA_ACTION, MOVIES_BY_CATEGORY_DATA_RECEIVED_ACTION, MOVIES_BY_CATEGORY_DATA_ERROR_ACTION }  from '../constants/Constants';

export const getMoviesByCategoryData = () => {
    return {
        type: MOVIES_BY_CATEGORY_DATA_ACTION
    }
}

export const getMoviesByCategoryDataSuccess = movies => {
    return {
        type: MOVIES_BY_CATEGORY_DATA_RECEIVED_ACTION,
        movies
    }
}

export const getMoviesByCategoryDataFailure = error => {
    return {
        type: MOVIES_BY_CATEGORY_DATA_ERROR_ACTION,
        error
    }
}