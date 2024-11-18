import React from 'react'
import './App.css'
import Home from './Component/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Header from './Component/Header/Header'
import Help from './Component/Help/Help'
import Corporate from './Component/Corporate/Corporate'
import BuyNowCard from './Component/BuyNowCard/BuyNowCard'
import ResWithOn_Food from './Component/FoodDesc/ResWithOn_Food'

const App = () => {
  return (
    <div>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/offer' element={<ResWithOn_Food />} />
        <Route path='/help' element={<Help />} />

        {/*  Dynamic routing route */}
        <Route path='/cart/:id' element={<BuyNowCard />} />
        <Route path='/corporate' element={<Corporate />} />
      </Routes>


    </div>
  )
}

export default App
