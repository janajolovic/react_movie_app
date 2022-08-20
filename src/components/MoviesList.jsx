import React, {useContext, useEffect} from 'react'
import MovieContext from '../MovieContext'
import Movie from './Movie'

const MoviesList = () => {

  const {movies, fetchPopular, filtered} = useContext(MovieContext)

  useEffect(() => {
    fetchPopular()
  }, [])

  return (
    <div className={movies.length ? "movies_list" : "no_results"}>
      {movies.length ? 
        filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })
      : <p>No results</p>
      }
      </div>
  )
}

export default MoviesList