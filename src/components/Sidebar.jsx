import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div>
            <FontAwesomeIcon icon="fa-solid fa-house" />
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