import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// const store = configureStore({});

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducers } from "./reducers/mainReducer";

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
export const store = createStore(reducers, composeWithDevTools());
