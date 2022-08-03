import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div>
            <FontAwesomeIcon icon="fa-solid fa-house" />
        </div>
        <div>
        <FontAwesomeIcon icon="fa-solid fa-user" />
        </div>
    </div>
  )
}

export default Sidebar