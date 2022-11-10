import { all } from "redux-saga/effects";
import watchHome from "./homee/saga/watcher";

export default function* rootSaga() {
    yield all([
        watchHome(),
    ])
}