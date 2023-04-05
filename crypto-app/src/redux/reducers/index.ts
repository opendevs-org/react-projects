import { combineReducers } from "redux";
import { AppReducer } from "./app";

const rootReducer = combineReducers({
  app: AppReducer,
})

export { rootReducer }
