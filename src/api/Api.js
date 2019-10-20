import { getPopularData, getPopularDataSuccess, getPopularDataFailure } from '../store/actions/PopularActions';
import { getCategoryData, getCategoryDataSuccess, getCategoryDataFailure } from '../store/actions/CategoryActions'
import { getMoviesByCategoryData, getMoviesByCategoryDataSuccess, getMoviesByCategoryDataFailure } from '../store/actions/MoviesByCategoryAction'
import { getAssetByIdData, getAssetByIdDataSuccess, getAssetByIdDataFailure } from '../store/actions/AssetDetailsActions'
import { getVideoByIdData, getVideoByIdDataSuccess, getVideoByIdDataFailure } from '../store/actions/VideosActions'

const baseURL = 'http://online.smartsoft.ro:3333/api/vod';

const Api = {
    // async thunk getPopularVideos
    getPopularVideos() {
        return async dispatch => {
            dispatch(getPopularData());
            await fetch(`${baseURL}/popular`)
                .then(response => response.json())
                .then(jsonResponse => {
                    if (jsonResponse.error) {
                        throw (jsonResponse.error);
                    }
                    dispatch(getPopularDataSuccess(jsonResponse.data));
                    //console.log(jsonResponse.data);
                    return jsonResponse.data;
                })
                .catch(error => {
                    dispatch(getPopularDataFailure(error));
                })
        }
    },
    getCategories() {
        return async dispatch => {
            dispatch(getCategoryData());
            await fetch(`${baseURL}/category`)
                .then(response => response.json())
                .then(jsonResponse => {
                    if (jsonResponse.error) {
                        throw (jsonResponse.error);
                    }
                    dispatch(getCategoryDataSuccess(jsonResponse.data));
                    //console.log(jsonResponse.data);
                    //console.log(Object.values(jsonResponse.data));
                    return jsonResponse.data;
                })
                .catch(error => {
                    dispatch(getCategoryDataFailure(error));
                })
        }
    },
    getMoviesByCategories(genreId) {
        return async dispatch => {
            dispatch(getMoviesByCategoryData());
            await fetch(`${baseURL}/category/${genreId}/assets`)
                .then(response => response.json())
                .then(jsonResponse => {
                    if (jsonResponse.error) {
                        throw (jsonResponse.error);
                    }
                    dispatch(getMoviesByCategoryDataSuccess(jsonResponse.data));
                   // console.log(jsonResponse.data);
                   //console.log(Object.values(jsonResponse.data));

                    return jsonResponse.data;
                })
                .catch(error => {
                    dispatch(getMoviesByCategoryDataFailure(error));
                })
        }
    },
    getAssetById(movieId) {
        return async dispatch => {
            dispatch(getAssetByIdData());
            await fetch(`${baseURL}/asset/${movieId}`)
                .then(response => response.json())
                .then(jsonResponse => {
                    if (jsonResponse.error) {
                        throw (jsonResponse.error);
                    }
                    dispatch(getAssetByIdDataSuccess(jsonResponse.data));
                    //console.log(jsonResponse.data);
                    //console.log(Object.values(jsonResponse.data));

                    return jsonResponse.data;
                })
                .catch(error => {
                    dispatch(getAssetByIdDataFailure(error));
                })
        }
    },
    getVideoById(movieId) {
        return async dispatch => {
            dispatch(getVideoByIdData());
            await fetch(`${baseURL}/asset/${movieId}/videos`)
                .then(response => response.json())
                .then(jsonResponse => {
                    if (jsonResponse.error) {
                        throw (jsonResponse.error);
                    }
                    dispatch(getVideoByIdDataSuccess(jsonResponse.data));
                    //console.log(jsonResponse.data);
                    //console.log(Object.values(jsonResponse.data));

                    return jsonResponse.data;
                })
                .catch(error => {
                    dispatch(getVideoByIdDataFailure(error));
                })
        }
    }
};

export default Api;
