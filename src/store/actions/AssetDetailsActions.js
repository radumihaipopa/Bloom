import { ASSET_BY_ID_DATA_ACTION, ASSET_BY_ID_DATA_RECEIVED_ACTION, ASSET_BY_ID_DATA_ERROR_ACTION }  from '../constants/Constants';

export const getAssetByIdData = () => {
    return {
        type:ASSET_BY_ID_DATA_ACTION
    }
}

export const getAssetByIdDataSuccess = movie => {
    return {
        type: ASSET_BY_ID_DATA_RECEIVED_ACTION,
        movie
    }
}

export const getAssetByIdDataFailure = error => {
    return {
        type: ASSET_BY_ID_DATA_ERROR_ACTION,
        error
    }
}