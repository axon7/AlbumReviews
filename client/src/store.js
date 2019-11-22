import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadState, saveState } from "./localStorage";

import rootReducer from "./reducers";

const persistedState = loadState();

const middleware = [thunk];

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
