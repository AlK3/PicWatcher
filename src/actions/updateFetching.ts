import { ActionTypes } from "./ActionTypes";

export const updateFetching = (fetching: boolean) => {
  return {
    type: ActionTypes.UPDATE_FETCHING,
    payload: fetching,
  };
}