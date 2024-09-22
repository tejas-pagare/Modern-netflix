import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { APT_OPTIONS } from "../utils/constants";



const  usePopularMovies = ()=>{
  const dispatch = useDispatch();
  const popularMovie = useSelector((state) => state.movies.PopularMovie);
  const getPopularMovies = async () => {
    try {
      
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', APT_OPTIONS)
      const response = await data.json()
    //  console.log(response)
      dispatch(addPopularMovies(response.results))
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(()=>{
   !popularMovie&&getPopularMovies();

  },[])
}

export default usePopularMovies;