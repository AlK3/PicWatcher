import { ActionTypes } from "./ActionTypes";

export const loadPhotos = (page: number, limit: number) => {
  return {
    type: ActionTypes.LOAD_PHOTOS,
    page,
    limit,
  };
}