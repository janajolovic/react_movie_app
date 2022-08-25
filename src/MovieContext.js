import { createContext, useState } from "react";
import axios from "axios";
import { useLocalStorage } from "./useLocalStorage";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [favourites, setFavourites] = useLocalStorage("fav", []);
  const [user, setUser] = useLocalStorage("user", {})

  const fetchPopular = async () => {
    try {
      let response = await axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=b454aa11fb4b5fc5b515d2e80a898a1c&language=en-US&page=1`)
        setMovies(response.data.results);
        setFiltered(response.data.results)
        setActiveGenre(0);
      } catch (err) {
        console.log(err)
      }
    }


    const fetchSearch = async (query) => {
      try {
        let response = await axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=b454aa11fb4b5fc5b515d2e80a898a1c&language=en-US&query=${query}&page=1&include_adult=false`)
        setMovies(response.data.results)
        setFiltered(response.data.results)
        setActiveGenre(0);
      } catch (err) {
        console.log(err)
      }
    };

    const addToFavourites = (movie) => {
      let isOnArray = false;
      favourites.map((fav) => {
        if (fav.id === movie.id) {
          isOnArray = true;
        }
      });
  
      if (isOnArray) {
        setFavourites(favourites.filter((fav) => fav.id !== movie.id));
      } else {
        setFavourites((prevState) => [...prevState, movie]);
        console.log(favourites)
      }
    };

    const getFavourites = () => {
      setMovies(favourites);
      setFiltered(favourites);
      setActiveGenre(0);
    };
  
    const isFav = (id) => {
      let fav = favourites.filter((fav) => fav.id === id);
      return fav.length === 0 ? true : false;
    };

    const login = (user) => {
        setUser(user)
    }

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        fetchPopular,
        fetchSearch,
        activeGenre,
        setActiveGenre,
        filtered,
        setFiltered,
        favourites,
        setFavourites,
        getFavourites,
        isFav,
        addToFavourites,
        user,
        setUser,
        login
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContext;