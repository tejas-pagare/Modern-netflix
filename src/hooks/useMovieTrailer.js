import { useEffect } from "react";
import { APT_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId)=>{
  
  const dispatch = useDispatch();
  const trailerVideo = useSelector((state) => state.movies.trailerVideo);
 // const [trailerId,setTrailerId] = useState(null);
  const getMovieVideo = async()=>{
    const response = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", APT_OPTIONS);
    const data = await response.json();
    
    const filterData = data.results.filter((movie)=>movie.type==="Trailer")
    const trailer = filterData.length ? filterData[0] : data.results[0];//check trailer is present or not if not take first clip
    //console.log(trailer);
    dispatch(addTrailerVideo(trailer))
    //setTrailerId(trailer.key);
  }
  
  useEffect(()=>{
    !trailerVideo&&getMovieVideo();
  },[])
}

export default useMovieTrailer;