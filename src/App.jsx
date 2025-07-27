import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Moviecard from './components/Moviecard'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Favorites from "./pages/Favorites"
import Navbar from './components/Navbar'
import "./css/App.css"
import { MovieProvider } from './contexts/Moviecontext'




function App() {
  
  return(
    <>
    <MovieProvider>
    <Navbar/>
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </main>
    </MovieProvider>
    
    
    </>
  )
}

export default App
