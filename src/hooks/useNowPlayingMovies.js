import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { APT_OPTIONS } from "../utils/constants";



const  useNowPlayingMovies = ()=>{
  const dispatch = useDispatch();
  const nowPlayingMovie = useSelector((state) => state.movies.nowPlayingMovie);
  const getNowPlayingMovies = async () => {
    try {
      
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', APT_OPTIONS)
      const response = await data.json()
    //  console.log(response)
      dispatch(addNowPlayingMovies(response.results))
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(()=>{
    if(!nowPlayingMovie){

      getNowPlayingMovies();
    }

  },[])
}

export default useNowPlayingMovies;