import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    
 
  return (
    <div className='bg-black'>
        <h1 className='pt-6 ml-4 font-bold text-xl text-white'>{title}</h1>
        <div>
            <MovieCard moviesImage={movies}/>
        </div>
    </div>
  )
}

export default MovieList
