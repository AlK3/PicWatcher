import { createAction, createReducer } from "@reduxjs/toolkit";
import { ActionTypes } from "../actions/ActionTypes";

class Photo {
  id!: string;
  author!: string;
  width!: number;
  height!: number;
  url!: string;
  download_url!: string;
}

interface PhotosState {
  photos: Photo[];
}

const initialState= {
  photos: [],
} as PhotosState

const updatePhotos = createAction(ActionTypes.UPDATE_PHOTOS);

export const photosReducer = createReducer(initialState, builder => {
  builder.addCase(updatePhotos, (state, action) => {
    state.photos = state.photos.concat(action.payload as unknown as Photo[]);
  });
});