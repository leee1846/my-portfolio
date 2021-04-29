import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import projectsReducer from "./projects/projectsReducer";

const reducer = combineReducers({
  projectsReducer,
});

const store = configureStore({
  reducer,
  middleware: [logger],
});

export default store;

export type ReducerType = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
