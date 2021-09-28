import createSagaMiddleware from "@redux-saga/core";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { rootSaga } from "../sagas/rootSaga";
import { fetchingReducer } from "./fetchingReducer";
import { pageReducer } from "./pageReducer";
import { photosReducer } from "./photosReducer";

const rootReducer = combineReducers({
  photos: photosReducer,
  fetching: fetchingReducer,
  page: pageReducer,
});

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
export type RootState = ReturnType<typeof rootReducer>
sagaMiddleware.run(rootSaga);