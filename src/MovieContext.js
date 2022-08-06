import { createContext, useState } from "react";
import axios from "axios";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);


  const fetchPopular = async () => {
    try {
      let response = await axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=b454aa11fb4b5fc5b515d2e80a898a1c&language=en-US&page=1`)
        setMovies(response.data.results);
        console.log(response.data.results)
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
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