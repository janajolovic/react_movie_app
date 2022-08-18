import React from 'react'
import Sidebar from './Sidebar'
import MoviesList from "./MoviesList"
import Search from './Search'
import Filters from './Filters'
import Pagination from '@mui/material/Pagination';

const MainContainer = () => {

  return (
    <div className='main_container'>
        <Sidebar />
        <div>
          <Search />
          <Filters />
          <MoviesList />
          <Pagination count={10} color="secondary" style={{color: "white"}} />
        </div>
    </div>
  )
}

export default MainContainer