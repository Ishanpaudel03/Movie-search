import React, { useState, useEffect } from 'react'
import Moviecard from '../components/Moviecard'
import "../css/Home.css"
import { getPopularMovies, searchMovies } from '../api/api'



const Home = () => {
    const [searchquery, setsearchquery] = useState("")
    const [movies, setmovies] = useState([])
    const [err, seterr] = useState(null)
    const [loading, setloading] = useState(true)

    useEffect(() => {
      const loadpopularmovies=async ()=>{
        try{
          const popularmovies=await getPopularMovies()
          setmovies(popularmovies)
        } 
        catch(err){
          console.log(err)
          seterr("Failed to load movies...")
          

        } 
        finally{
          setloading(false)
        }

      }
      loadpopularmovies()
    }, [])
    

  const handlesearch=async(e)=>{
    e.preventDefault()
    if(!searchquery.trim()) return
    if(loading) return 

    setloading(true)

    try{
      const searchResults= await searchMovies(searchquery)
      setmovies(searchResults)
      seterr(null)
    } 
    catch (err){
      console.log(err)
      seterr("Failed to search movies...")
    } 
    finally{
      setloading(false)
    }
    

  }
  return (
    <>
    <div className='home'>
        <form onSubmit={handlesearch} className='search-form'>
            <input type="text" placeholder='Search for movies' className='search-input' value={searchquery}
            onChange={(e)=>setsearchquery(e.target.value)} /> 
            <button type='submit' className='search-button'>Search</button>
        </form>
        {err && <div className='error'>{err}</div>}
        {loading ? (<div className='loading'>Loading...</div>)
        :(
          <div className="movies-grid">
            {( movies.map((movie)=>
              (<Moviecard movie={movie} key={movie.id}/>)))}
        </div>
        )
        
        }
    </div>
    </>
  )
}

export default Home