import { compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const rootEnhancers = composeEnhancers(applyMiddleware(thunk));

export default rootEnhancers;
