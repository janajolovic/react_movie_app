import React, { useContext } from 'react'
import Sidebar from './Sidebar'
import MoviesList from "./MoviesList"
import Search from './Search'
import Filters from './Filters'
import Pagination from '@mui/material/Pagination';
import MovieContext from '../MovieContext'

const MainContainer = () => {
  
  const {movies} = useContext(MovieContext)

  return (
    <div className='main_container'>
        <Sidebar />
        <div style={{width: "100%"}}>
          <Search />
          <Filters />
          <MoviesList />
          {movies.length ? 
            <div className="pagination">
              <Pagination count={10} color="secondary" style={{color: "white"}} />
            </div>
            : ""
          }
        </div>
    </div>
  )
}

export default MainContainer