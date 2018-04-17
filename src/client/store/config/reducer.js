import types from "./types";

const defaultState = {};

const setConfig = (state, action) =>
  Object.assign({}, state, action.payload);

export default (state, action) => {
  switch(action.type) {
    case types.SET_CONFIG: return setConfig(state, action);
    default: return state || defaultState;
  }
};
