import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import SingleRecipe from './pages/SingleRecipe'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route path='/favorites' element={<Favorites></Favorites>}></Route>
          <Route path='recipe/:id' element={<SingleRecipe></SingleRecipe>}></Route>
          <Route path='*' element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
