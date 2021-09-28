import { ActionTypes } from "./ActionTypes";

export const updatePage = (page: number) => {
  return {
    type: ActionTypes.UPDATE_PAGE,
    payload: page,
  };
}