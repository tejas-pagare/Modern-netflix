import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

function MainContainer() {
  const movies = useSelector((state) => state.movies?.nowPlayingMovie)
  if(movies===null) return;//checking movies are present or not if not do early return
  const mainMovie = movies[0];//selecting one movie for background
  console.log(mainMovie);
  const {original_title, overview, id} = mainMovie;
  return (
    <div className='overflow-hidden'>
    <VideoTitle title={original_title} overview={overview} />
    <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
