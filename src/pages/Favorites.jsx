import React from 'react'
import "../css/Favorites.css"
import { useMoviecontext } from '../contexts/Moviecontext'
import Moviecard from '../components/Moviecard'



const Favorites = () => {
  const {favorites}=useMoviecontext()

  if (favorites){
    return(
      <div className="favorites">
        <h2>Your favorites</h2>
        <div className="movies-grid">
            {( favorites.map((movie)=>
              (<Moviecard movie={movie} key={movie.id}/>)))}
        </div>
      </div>
    )
  }
  return (
     <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here!</p>
    </div>
  )
}

export default Favorites