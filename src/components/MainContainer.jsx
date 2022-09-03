import React, { useContext } from 'react'
import Sidebar from './Sidebar'
import MoviesList from "./MoviesList"
import Search from './Search'
import Filters from './Filters'
import Pagination from '@mui/material/Pagination';
import MovieContext from '../MovieContext'

const MainContainer = () => {
  
  const {filtered, setPage, page} = useContext(MovieContext)

  return (
    <div className='main_container'>
        <Sidebar />
        <div style={{width: "100%"}}>
          <Search />
          <Filters />
          <MoviesList />
          {filtered.length ? 
            <div className="pagination">
              
                <button 
                  onClick={() => {setPage((prevState) => prevState += 1)}}
                  >Load more...</button>
            </div>
            : ""
          }
        </div>
    </div>
  )
}

export default MainContainer