
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';

function Browser() {
  const showGptSearch = useSelector((state) => state.gpt.showGptSearchView);

useNowPlayingMovies();
usePopularMovies();
useUpcomingMovies();
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
      {showGptSearch ? <GPTSearch/>:(<>
      
      <MainContainer/>
      <SecondaryContainer/>
      </>)}
    </div>
  )
}

export default Browser
