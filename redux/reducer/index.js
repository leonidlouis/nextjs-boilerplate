import { combineReducers } from "redux";
import { reducer as sample } from "./sample";
import { HYDRATE } from "next-redux-wrapper";

const combinedReducers = combineReducers({
  sample
});

// to handle merging server side store to client side store
const reducerHydrator = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return combinedReducers(state, action);
  }
};

export default reducerHydrator;
