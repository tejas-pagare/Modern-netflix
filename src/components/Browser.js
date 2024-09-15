import React, { useEffect } from 'react'
import Header from './Header'
import { APT_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

function Browser() {
useNowPlayingMovies();
  return (
    <div>
      {/*
        -MainComponent
          -VideoBackgound
          -VideoTitle
        
        -SecondaryComponent
          -MovieList*n
          -card*n

     */}
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browser
