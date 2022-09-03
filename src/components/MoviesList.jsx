import React, {useContext, useEffect} from 'react'
import MovieContext from '../MovieContext'
import Movie from './Movie'

const MoviesList = () => {

  const {fetchPopular, filtered, page} = useContext(MovieContext)

  useEffect(() => {
    fetchPopular()
  }, [page])

  return (
    <div className={filtered.length ? "movies_list" : "no_results"}>
      {filtered.length ? 
        filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })
      : <p>No results</p>
      }
      </div>
  )
}

export default MoviesList