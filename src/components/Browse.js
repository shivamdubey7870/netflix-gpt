
import Header from './Header'

import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovie from '../hooks/usePopularMovie';



const Browse = () => {
 useNowPlayingMovies();
 usePopularMovie();
   
  return (
    <div>
      
      <Header/>
      {/* -MainContainer
      -VideoBackground
      -videoTitle
      SecondryContainer
      -MovieList * n
      -cards * n */}
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse