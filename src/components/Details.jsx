import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Details = () => {
    
    let params = useParams();
    let navigate = useNavigate();
    
    const [movie, setMovie] = useState();
    
    const fetchMovie = async (id) => {
        const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=b454aa11fb4b5fc5b515d2e80a898a1c&language=en-US`
        );
        setMovie(res.data);
    };

    useEffect(() => {
        fetchMovie(params.movieId)
    }, [])
      
  return (
    <div className="details_container">
        <img src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path} />
        <div className='details'>
            <h1>{movie?.title}</h1>
            <p><span>Overview: </span>{movie?.overview}</p> 
            <span>Genres: </span>{movie?.genres.map(genre => {
                return <p className="movie_genre" key={genre.id}>{genre.name}</p>
            })}    
            <span>Production companies: </span>{movie?.production_companies.map(comp => {
                return <p key={comp.id}>{comp.name}</p>
            })}    
            <p><span>Status: </span>{movie?.status}</p>
            <p><span>Release date: </span>{movie?.release_date}</p>
            <p><span>Runtime: </span>{movie?.runtime}</p>
            <p><span>Popularity: </span>{movie?.popularity}</p>
            <p><span>Rating: </span>{movie?.vote_average}</p>  
            <a href={movie?.homepage}>Film page</a>  
        </div>
    </div>
  )
}

export default Details