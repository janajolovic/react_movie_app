import React from 'react'
import { Link } from 'react-router-dom'

const Movie = ({movie}) => {
  return (
    <div className="movie">
      <Link to={`/movie/${movie.id}`} key={movie.id} />
        {movie.poster_path !== null ? (
        <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
      ) : (
        <img src="" />
      )}
      <h2>{movie.title}</h2>
    </div>
  )
}

export default Movie