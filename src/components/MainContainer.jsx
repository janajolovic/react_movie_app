import React, { useContext } from 'react'
import Sidebar from './Sidebar'
import MoviesList from "./MoviesList"
import Search from './Search'
import Filters from './Filters'
import Header from "./Header"
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
          <Header />
          <MoviesList />
          {filtered.length ? 
            <div className="load_more">
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