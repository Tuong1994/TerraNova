import { VideoAction } from "../actions/VideoAction";
import { EVideoActionTypes } from "../actionTypes/VideoActionTypes";

interface IStateDefault {
  videoUrl: string;
}

const stateDefault: IStateDefault = {
  videoUrl: "",
};

export const VideoReducer = (state = stateDefault, action: VideoAction) => {
  switch (action.type) {
    case EVideoActionTypes.ADD_LINK: {
      let newState = { ...state };
      newState.videoUrl = action.payload;
      state = newState;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
