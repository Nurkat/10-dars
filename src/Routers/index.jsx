import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SingleProduct from '../pages/SingleProduct'



function Routers() {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/:id' element={<SingleProduct/>}/>
  </Routes>
  )
}

export default Routers