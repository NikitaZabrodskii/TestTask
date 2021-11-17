import { pathsActionsTypes } from "./actions";

const allPathsState = [];

export const pathsReducer = (state = allPathsState, action) => {
  switch (action.type) {
    case pathsActionsTypes:
      return [...state, action.payload];
    default:
      return state;
  }
};
