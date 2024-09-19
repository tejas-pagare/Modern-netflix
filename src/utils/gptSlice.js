import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearchView: false,
    searchResults: null,
    movieNames: null
  },
  reducers: {
    toggleGptSearchView: (state) => {

      state.showGptSearchView = !state.showGptSearchView;
    },
    addGptSearchResult: (state, action) => {
      const { movieNames, moviesResults } = action.payload;
      state.movieNames = movieNames;
      state.searchResults = moviesResults;
    },
    resetGptSearch: (state) => {
      state.movieNames=null;
      state.searchResults=null;
      return;
    }
  }
})

export const { toggleGptSearchView, addGptSearchResult,resetGptSearch } = gptSlice.actions;

export default gptSlice.reducer;