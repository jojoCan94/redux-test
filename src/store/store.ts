import { compose, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./rootReducer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const devTools =
  (process.env.NODE_ENV !== "production" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;

const middleware = [
  ...getDefaultMiddleware({
    thunk: false,
    immutableCheck: true,
    serializableCheck: false,
  }),
  sagaMiddleware,
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools,
  // preloadedState: initStates,
  enhancers: [],
});

sagaMiddleware.run(rootSaga);

export default store;