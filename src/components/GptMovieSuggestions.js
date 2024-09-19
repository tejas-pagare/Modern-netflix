import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

function GptMovieSuggestions() {
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, searchResults } = gpt;
  if (!movieNames) return null;
  console.log(searchResults[0].results)
  return (
    <div className='bg-black text-white p-4 m-4'>
      {
        searchResults.map((data, idx) => {
          return <MovieList title={movieNames[idx]} movies={data.results} />

        })
      }
      {/* <MovieList title={movieNames[0]} movies={searchResults[0]} /> */}
    </div>
  )
}

export default GptMovieSuggestions
