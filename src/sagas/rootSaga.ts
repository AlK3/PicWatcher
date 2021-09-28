import { all } from "@redux-saga/core/effects";
import { watchLoadPhotos } from "./loadPhotosSaga";

export function* rootSaga() {
  yield all([
    watchLoadPhotos(),
  ]);
}