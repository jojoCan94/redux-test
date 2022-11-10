import { call, put } from "redux-saga/effects"
import { getHomeData } from "../api"
import { GET_HOME_DATA_ERROR, GET_HOME_DATA_SUCCESS } from "../consts"

export function* getHomeDataRequestSaga(payload: any) {
  try {
    const homeResponse: object = yield call(getHomeData, payload)
    yield put({ type: GET_HOME_DATA_SUCCESS, homeResponse })
  } catch (error) {
    yield put({ type: GET_HOME_DATA_ERROR, error })
  }
}
