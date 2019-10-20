import { combineReducers } from 'redux';
import category from './CategoryReducer';
import popular from './PopularReducer';
import moviesCategory from './MoviesByCategoriesReducer';
import asset from './AssetDetailsReducer';
import video from './VideosReducer';

export default combineReducers({
    category,
    popular,
    moviesCategory,
    asset,
    video
})