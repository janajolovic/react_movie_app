import React from 'react'
import Sidebar from './Sidebar'
import MoviesList from "./MoviesList"
import Search from './Search'
import Filters from './Filters'

const MainContainer = () => {

  return (
    <div className='main_container'>
        <Sidebar />
        <div>
          <Search />
          <Filters />
          <MoviesList />
        </div>
    </div>
  )
}

export default MainContainer