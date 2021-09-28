import { ActionTypes } from "./ActionTypes";

export const updatePhotos = (dataFromServer: any) => {
  return {
    type: ActionTypes.UPDATE_PHOTOS,
    payload: dataFromServer,
  };
}