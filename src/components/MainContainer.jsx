import React from 'react'
import Sidebar from './Sidebar'
import MoviesList from "./MoviesList"

const MainContainer = () => {

  return (
    <div className='main_container'>
        <Sidebar />
        <MoviesList />
    </div>
  )
}

export default MainContainer