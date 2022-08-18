import React, {useContext, useEffect} from 'react'
import MovieContext from '../MovieContext'
import Movie from './Movie'

const MoviesList = () => {

  const {movies, fetchPopular, filtered} = useContext(MovieContext)

  useEffect(() => {
    fetchPopular()
  }, [])

  return (
    <div className='movies_list'>
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
    </div>
  )
}

export default MoviesList