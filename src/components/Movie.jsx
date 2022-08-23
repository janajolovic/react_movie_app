import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Movie = ({movie}) => {
  
  const { addToFavourites, isFav } = useContext(MovieContext);
  
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="movie"
    >
      {isFav(movie.id) ? (
        <FontAwesomeIcon icon="fa-solid fa-star" onClick={() => addToFavourites(movie)} />
      ) : (
        <FontAwesomeIcon icon="fa-solid fa-star" onClick={() => addToFavourites(movie)} />
      )}
      <Link to={`/movie/${movie.id}`} key={movie.id} >
      <div className="shadow"></div>
        </Link>
        {movie.poster_path !== null ? (
        <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
      ) : (
        <img src="" />
      )}
      <h2>{movie.title}</h2>
    </motion.div>
  )
}

export default Movie