import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import { getUser } from '../utils/userSlice'

function SecondaryContainer() {
  const movies = useSelector((store)=>store.movies)

  
  return (
    <div className='bg-black'>

    <div className='-mt-4 sm:-mt-0 md:-mt-24 lg:-mt-36  relative z-1000'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie} />
      <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovie} />
      <MovieList title={"Popular"} movies={movies.UpcomingMovie} />
      <MovieList title={"Trending"} movies={movies.nowPlayingMovie} />
      <MovieList title={"Horror"} movies={movies.nowPlayingMovie} />
    </div>
    </div>
  )
}

export default SecondaryContainer
