import * as Eff from 'redux-saga/effects';
import { put, call } from "@redux-saga/core/effects";
import { ActionTypes } from "../actions/ActionTypes";
import { updatePhotos } from "../actions/updatePhotos";
import { updatePage } from '../actions/updatePage';
import { updateFetching } from '../actions/updateFetching';

const takeEvery: any = Eff.takeEvery;

function fetchPhotos(page: number, limit: number) {
  return fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
    .then(response => response.json())
}

interface LoadPhotosSagaProps {
  page: number;
  limit: number;
}

function* workerLoadPhotos({page, limit}: LoadPhotosSagaProps): Generator {
  const photos = yield call(fetchPhotos, page, limit);
  yield put(updatePage(page + 1));
  yield put(updatePhotos(photos));
  yield put(updateFetching(false));
}

export function* watchLoadPhotos() {
  yield takeEvery(ActionTypes.LOAD_PHOTOS, workerLoadPhotos);
}