import { createAction, createReducer } from "@reduxjs/toolkit";
import { ActionTypes } from "../actions/ActionTypes";

interface PageState {
  page: number;
}

const initialState= {
  page: 1,
} as PageState

const updatePage = createAction(ActionTypes.UPDATE_PAGE);

export const pageReducer = createReducer(initialState, builder => {
  builder.addCase(updatePage, (state, action) => {
    state.page = action.payload as unknown as number;
  });
});