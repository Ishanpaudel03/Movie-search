import React, { useContext } from 'react'
import "../css/Moviecard.css"
import { useMoviecontext } from '../contexts/Moviecontext'


const Moviecard = ({movie}) => {
    const{addtofavs, removefromfavs, checkfavs}=useMoviecontext()
    const favorite=checkfavs(movie.id)
    

    const favclick=(e)=>{
        e.preventDefault()
        if (favorite) removefromfavs(movie.id)
        else addtofavs(movie)
        

    }
  return (
    <div className='movie-card'>
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className='movie-overlay'>
                <button className={`favorite-btn ${favorite?"active":""}`} onClick={favclick}>♥</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
  )
}

export default Moviecard