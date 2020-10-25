import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import client from "../library/Axios";
import axiosMiddleware from "redux-axios-middleware";
import usersReducer from "./reducers/usersReducer";


const enhancers = [];
const middleware = [thunk, axiosMiddleware(client)];
if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composeEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const rootReducer = combineReducers({
  lastViewedUsers: usersReducer,
});

export default (preloadedState) =>
  createStore(rootReducer, preloadedState, composeEnhancers);
