export const routesActionTypes = {
  SET__ROUTE: "ROUTES.SET__ROUTE",
};

export const routesActions = {
  setRoute: (payload) => ({ type: routesActionTypes.SET__ROUTE, payload }),
};
