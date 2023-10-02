import { combineReducers } from "@reduxjs/toolkit";
import movieReducer from "../slices/movie";

export const reducer = combineReducers({
  movies: movieReducer,
});
