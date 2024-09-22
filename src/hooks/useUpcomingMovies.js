import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { APT_OPTIONS } from "../utils/constants";



const  useUpcomingMovies = ()=>{
  const dispatch = useDispatch();
  const UpcomingMovie = useSelector((store)=>store.movies.UpcomingMovie)
  const getUpcomingMovies = async () => {
    try {
      
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', APT_OPTIONS)
      const response = await data.json()
    //  console.log(response)
      dispatch(addUpcomingMovies(response.results))
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(()=>{
    getUpcomingMovies();

  },[])
}

export default useUpcomingMovies;