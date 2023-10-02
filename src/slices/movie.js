import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const reducers = {
  addMovies: (state, action) => {
    state.movies = action.payload;
  },

  removeMovie: (state, action) => {
    const id = action.payload;
    state.movies = state.movies.filter((movie) => {
      return movie.id !== id;
    });
  },

  incrementLikes(state, action) {
    const id = action.payload;
    state.movies = state.movies.map((movie) => {
      if (movie.id === id) {
        movie.likes++;
      }
      return movie;
    });
  },

  incrementDislikes(state, action) {
    const id = action.payload;
    state.movies = state.movies.map((movie) => {
      if (movie.id === id) {
        movie.dislikes++;
      }
      return movie;
    });
  },
};

const slice = createSlice({
  name: "movies",
  initialState,
  reducers: reducers,
});

export const getMovies = (state) => state.movies.movies;

export const { addMovies, removeMovie, incrementLikes, incrementDislikes } =
  slice.actions;

export default slice.reducer;
