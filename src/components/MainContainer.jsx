import React, { useContext } from 'react'
import Sidebar from './Sidebar'
import MoviesList from "./MoviesList"
import Search from './Search'
import Filters from './Filters'
import Header from "./Header"
import MovieContext from '../MovieContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MainContainer = () => {
  
  const {filtered, setPage, header} = useContext(MovieContext)

  return (
    <div className='main_container'>
        <Sidebar />
        <div style={{width: "100%"}}>
          <Search />
          <Filters />
          <Header />
          <MoviesList />
          {filtered.length && header === "Trending" ? 
            <div className="load_more">
              <button 
                onClick={() => {setPage((prevState) => prevState -= 1)}}
                >
                  <FontAwesomeIcon icon="fa-solid fa-arrow-left"/>
              </button>
              <button 
                onClick={() => {setPage((prevState) => prevState += 1)}}
                ><FontAwesomeIcon icon="fa-solid fa-arrow-right"/>
              </button>
            </div>
            : ""
          }
        </div>
    </div>
  )
}

export default MainContainer