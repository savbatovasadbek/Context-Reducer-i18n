import { TYPES_ACTIONS } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case TYPES_ACTIONS.ADD:
      return { ...state };

    default:
      break;
  }
};
