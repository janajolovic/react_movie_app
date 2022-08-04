import React, {useContext, useEffect} from 'react'
import MovieContext from '../MovieContext'
import Movie from './Movie'

const MoviesList = () => {

  const {movies, fetchPopular} = useContext(MovieContext)

  useEffect(() => {
    fetchPopular()
  }, [])

  return (
    <div className='movies_list'>
        {movies.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
    </div>
  )
}

export default MoviesList