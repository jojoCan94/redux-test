import { takeLatest } from "redux-saga/effects"
import { GET_HOME_DATA_REQUEST } from "../consts"
import { getHomeDataRequestSaga } from "./saga"

export default function* watchHome() {
  yield takeLatest(GET_HOME_DATA_REQUEST, getHomeDataRequestSaga)
}
