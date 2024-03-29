import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";

//actions
import { checkForExpiredToken } from "./actions";
import { fetchAllergies } from "./actions";

const middlewares = [thunk];
const enhancer = composeWithDevTools({})(applyMiddleware(...middlewares));

const store = createStore(reducers, enhancer);

store.dispatch(checkForExpiredToken());
store.dispatch(fetchAllergies());

export default store;
