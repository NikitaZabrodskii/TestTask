export const pathsActionsTypes = {
  SET__PATH: "PATHS.SET__PATH",
};

export const pathsActions = {
  setPath: (payload) => ({ type: pathsActionsTypes.SET__PATH, payload }),
};
