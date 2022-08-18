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
    <div className="filter-container">
        <button
        className={activeGenre === 0 ? "active" : null}
        onClick={() => setActiveGenre(0)}
        >
        All
        </button>
        <button
        className={activeGenre === 28 ? "active" : null}
        onClick={() => setActiveGenre(28)}
        >
        Action
        </button>
        <button
        className={activeGenre === 12 ? "active" : null}
        onClick={() => setActiveGenre(12)}
        >
        Adventure
        </button>

        {moreGenres &&
        genres.map((genre) => (
          <button
            key={genre.id}
            className={activeGenre === genre.id ? "active" : null}
            onClick={() => setActiveGenre(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      <button className="more" onClick={() => setMoreGenres(!moreGenres)}>
        {moreGenres ? <FontAwesomeIcon icon="fa-solid fa-arrow-left-to-line" /> : <FontAwesomeIcon icon="fa-solid fa-ellipsis" />}
      </button>
    </div>
  )
}

export default Filters