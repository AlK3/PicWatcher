import { createAction, createReducer } from "@reduxjs/toolkit";
import { ActionTypes } from "../actions/ActionTypes";

interface FetchingState {
  fething: boolean;
}

const initialState= {
  fething: true,
} as FetchingState

const updateFetching = createAction(ActionTypes.UPDATE_FETCHING);

export const fetchingReducer = createReducer(initialState, builder => {
  builder.addCase(updateFetching, (state, action) => {
    state.fething = action.payload as unknown as boolean;
  });
});