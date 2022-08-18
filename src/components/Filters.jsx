import React, {useState, useEffect, useContext} from 'react'
import MovieContext from "../MovieContext";
import genres from "../genres";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Filters = () => {
    const [moreGenres, setMoreGenres] = useState(false);
    const { setActiveGenre, activeGenre, movies, setFiltered } = useContext(MovieContext);

    useEffect(() => {
        if (activeGenre === 0) {
          setFiltered(movies);
        } else {
          const filtered = movies.filter((movie) =>
            movie.genre_ids.includes(activeGenre)
          );
          setFiltered(filtered);
        }
      }, [activeGenre]);

  return (
    <div>Filters</div>
  )
}

export default Filters