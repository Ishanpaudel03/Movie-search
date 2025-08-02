import { createContext, useContext, useEffect, useState } from "react";

const Moviecontext=createContext()

export const useMoviecontext=()=> useContext(Moviecontext)

export const MovieProvider=({children})=>{
    const [favorites, setfavorites] = useState([]) 
    useEffect(()=>{
        const storedfavs=localStorage.getItem("favorites") 

        if (storedfavs) setfavorites(JSON.parse(storedfavs))
    },[])

    useEffect(()=>{
        localStorage.setItem('favorites',JSON.stringify(favorites))
    },[favorites])

    const addtofavs=(movie)=>{
        setfavorites(prev=>[...prev, movie])
    }

    const removefromfavs=(movieId)=>{
        setfavorites(prev=>prev.filter(movie=>movie.id!=movieId))
    }

    const checkfavs=(movieId)=>{
        return favorites.some(movie=>movie.id===movieId)
    }

    const value={
        favorites,addtofavs, removefromfavs, checkfavs
    }
    return (
       < Moviecontext.Provider value={value}>
         {children}
       </Moviecontext.Provider>
    )
}
