import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState:{
    nowPlayingMovie:null,
    trailerVideo:null,
    PopularMovie:null,
    UpcomingMovie:null,
    
  },
  reducers: {
    addNowPlayingMovies: (state, action)=> {
      state.nowPlayingMovie=action.payload
    },
    addTrailerVideo: (state,action)=>{
      state.trailerVideo =action.payload
    },
    addPopularMovies: (state,action)=>{
      state.PopularMovie = action.payload
    },
    addUpcomingMovies: (state,action)=>{
      state.UpcomingMovie = action.payload
    }

  }
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addUpcomingMovies} = movieSlice.actions

export default movieSlice.reducer;