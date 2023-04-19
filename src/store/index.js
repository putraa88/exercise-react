import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/user.reducer";
import newsReducer from "./reducers/news.reducer";

const reducers = combineReducers({
  userReducer,
  newsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;