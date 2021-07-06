import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URI } from '../utils';
import axios from 'axios';

// status: 'idle' | 'loading' | 'succeeded' | 'failed',
// error: string | null

const initialState = {
  movies: [],
  page: 1,
  status: 'idle',
  error: null,
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await axios.get(`${URI}`);
  return response.data.results;
});

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    updatePage: (state, action) => {
      state.page == action.page;
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.movies = state.movies.concat(action.payload);
    },
    [fetchMovies.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { updatePage } = movieSlice.actions;

export default movieSlice.reducer;

export const selectAllMovies = (state) => state.movies.movies;
