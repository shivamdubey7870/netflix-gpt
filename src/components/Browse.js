
import Header from './Header'

import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovie from '../hooks/usePopularMovie';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';



const Browse = () => {
  const showGptSearchView=useSelector((store)=> store.gpt.showGptSearch)
 useNowPlayingMovies();
 usePopularMovie();
 useUpcomingMovies();
 
   
  return (
    <div>
      
      <Header/>
      {showGptSearchView ? (
             <GptSearch/>
      ):(
        <>
               <MainContainer/>
      <SecondaryContainer/>
        </>
      )}
     
      {/* -MainContainer
      -VideoBackground
      -videoTitle
      SecondryContainer
      -MovieList * n
      -cards * n */}
    
    </div>
  )
}

export default Browse