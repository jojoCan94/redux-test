import { call, put } from "redux-saga/effects"
import { getHomeData } from "../api"
import { GET_HOME_DATA_ERROR, GET_HOME_DATA_SUCCESS } from "../consts"

export function* getHomeDataRequestSaga() {
  try {
    const homeResponse: any[] = yield call(getHomeData)
    yield put({ type: GET_HOME_DATA_SUCCESS, homeResponse })
  } catch (error) {
    yield put({ type: GET_HOME_DATA_ERROR, error })
  }
}
