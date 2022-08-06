import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate()
  return (
    <div className='sidebar'>
        <div>
            <FontAwesomeIcon icon="fa-solid fa-house" onClick={() => navigate("/")}/>
        </div>
        <div>
            <FontAwesomeIcon icon="fa-solid fa-clapperboard" />
        </div>
        <div>
            <FontAwesomeIcon icon="fa-solid fa-fire-flame-curved" />
        </div>
        <div>
            <FontAwesomeIcon icon="fa-solid fa-star" />
        </div>
        <div>
            <FontAwesomeIcon icon="fa-solid fa-circle-user" />
        </div>
    </div>
  )
}

export default Sidebar