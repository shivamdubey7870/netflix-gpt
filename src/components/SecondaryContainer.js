import React from 'react'
import MovieList from './MovieList'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movie=useSelector((store)=>store.movies)
  
  return (
    <div>
      {/* MovieList-popular
        MovieCard* n
      MovieList - Now nowPlaying
      MovieList - Trending
      MovieList - Horror   */}
      <MovieList title={"Now Playing"} movies={movie.nowPlayingMovies}/>
       <MovieList title={"Top Rated"} movies={movie.topRatedMovies}/>
        <MovieList title={"Popular Movies"} movies={movie.popularMovies}/>
        <MovieList title={"Horror"} movies={movie.nowPlayingMovies}/>
        <MovieList title={"Upcoming"} movies={movie.upcomingMovies}/>
      <MovieCard/>
    </div>
  )
}

export default SecondaryContainer