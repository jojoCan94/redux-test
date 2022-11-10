import * as types from "../consts"

export const initialState = {
    homeDataResponse: {}
}

export default function homeReducer(state = initialState, action: any) {
    switch( action.type) {
        case types.GET_HOME_DATA_REQUEST: {
            return {...state}
        }
        case types.GET_HOME_DATA_SUCCESS: {
            return {...state, homeDataResponse: action.response}
        }
        case types.GET_HOME_DATA_ERROR: {
            return {...state, errorMsg: "some errors"}
        }
        default: {
            return { ...state }
        }
    }
}