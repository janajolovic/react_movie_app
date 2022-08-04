import React, {useContext, useEffect} from 'react'
import MovieContext from '../MovieContext'

const MoviesList = () => {

  const {fetchPopular} = useContext(MovieContext)

  useEffect(() => {
    fetchPopular()
  }, [])

  return (
    <div>MoviesList</div>
  )
}

export default MoviesList