import { createContext, useState } from "react";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=b454aa11fb4b5fc5b515d2e80a898a1c&language=en-US&page=1"
    );
    const movies = await data.json();
    setMovies(movies.results);
    console.log(movies.results)
    console.log(movies)
  }

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        fetchPopular
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContext;