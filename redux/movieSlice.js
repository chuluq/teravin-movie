import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  movies: [],
  status: 'idle',
  error: null,
  notification: false,
};

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (uri, thunkAPI) => {
    const response = await axios.get(`${uri}`);
    return response.data.results;
  }
);

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    showNotification: (state) => {
      state.notification = true;
    },
    hideNotification: (state) => {
      state.notification = false;
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.movies = action.payload;
    },
    [fetchMovies.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { updatePage, showNotification, hideNotification } =
  movieSlice.actions;

export default movieSlice.reducer;

export const selectAllMovies = (state) => state.movies.movies;
