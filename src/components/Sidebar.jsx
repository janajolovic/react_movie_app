import React, { useContext } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import MovieContext from '../MovieContext';


const Sidebar = () => {
    const navigate = useNavigate()

    const {getFavourites} = useContext(MovieContext)

    const {fetchPopular} = useContext(MovieContext)
  return (
    <div className='sidebar'>
        <div onClick={() => fetchPopular()}>
            <FontAwesomeIcon icon="fa-solid fa-house" onClick={() => navigate("/")}/>
        </div>
        <div>
            <FontAwesomeIcon icon="fa-solid fa-star" onClick={() => getFavourites()}/>
        </div>
        <div>
            <FontAwesomeIcon icon="fa-solid fa-circle-user" onClick={() => navigate("/login")}/>
        </div>
    </div>
  )
}

export default Sidebar