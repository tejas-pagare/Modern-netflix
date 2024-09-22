import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai';
import model from '../utils/openai';
import { APT_OPTIONS } from '../utils/constants';
import { addGptSearchResult } from '../utils/gptSlice';

function GptSearchBar() {
  const language = useSelector((store) => store.config.language)
  const searchQuery = useRef(null);
  const dispatch = useDispatch();
  //fetching requested movie from tmdb api
  const searchMovieInTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", APT_OPTIONS);

    const response = await data.json();
    return response;
    // return response;

  }
  const handleGptSearchClick = async () => {
    const gptSearch = "Act as a movie recommendation system and suggest some movies for query: " + searchQuery.current.value + "only give name for only 5 movies and comma seperated like the example list head Example: Result: Gadar , sholay, Don, koi mila gaya,Golmaal ";
    let result = await model.generateContent(gptSearch);
    if (!result) return "Error";

    result = result.response.text().replace(/^Result: /, '');
    // const getResult = await openai.chat.completions.create({
    //   model: "gpt-3.5-turbo",
    //   messages: [{ role: 'user', content: gptSearch }],
    // });
    const requestedMovies = result.split(",");

    //   promise array becuase searchMovieInTMDB is a async function
    const promiseArray = requestedMovies.map((movie) => searchMovieInTMDB(movie));
    //   [promise,promise,promise,promise,promise]
    const searchMoviesInfo = await Promise.all(promiseArray);
    console.log(searchMoviesInfo);
    console.log(requestedMovies,searchMoviesInfo);
    dispatch(addGptSearchResult({ movieNames: requestedMovies, moviesResults: searchMoviesInfo }));

  }

  return (
    <div className='pt-32 flex justify-center '>
      <form className='text-center py-3 rounded-md flex gap-2 items-center justify-center bg-black w-[80%] sm:w-[60%]' onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchQuery}
          className='sx md:text-lg py-2 rounded-[10px] w-[80%]  text-center font-semibold outline-none' type="text" placeholder={lang[language].gptSearchPlaceholder} />
        <button
          onClick={handleGptSearchClick}
          className='py-3 px-6  bg-red-600 text-white font-bold rounded-[10px] ' type="submit">{lang[language].search}</button>
      </form>

    </div>
  )
}

export default GptSearchBar
