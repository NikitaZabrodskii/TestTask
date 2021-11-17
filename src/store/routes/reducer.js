import { routesActionTypes } from "./actions";

const routesState = {
  route: "/main",
  nodes: [
    {
      route: "/main/second",
      nodes: [
        {
          route: "/main/second/reduce",
          nodes: [],
          title: "reduce",
        },
      ],
      title: "Second",
    },
    {
      route: "main/third",
      nodes: [{ route: "main/third/oxx", nodes: [], title: "oxx" }],
      title: "Third",
    },
  ],
  title: "Main",
};

export const routeReducer = (state = routesState, action) => {
  switch (action.type) {
    case routesActionTypes.SET__ROUTE:
      return { ...state, nodes: { ...action.payload } };
    default:
      return state;
  }
};
