import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContext;