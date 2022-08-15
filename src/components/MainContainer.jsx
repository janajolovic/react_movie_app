import React from 'react'
import Sidebar from './Sidebar'
import MoviesList from "./MoviesList"
import Search from './Search'

const MainContainer = () => {

  return (
    <div className='main_container'>
        <Sidebar />
        <div>
          <Search />
          <MoviesList />
        </div>
    </div>
  )
}

export default MainContainer