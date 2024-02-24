// import React from 'react'
import './style.scss'
import Herobanner from './herobanner/Herobanner'
import Trending from './Trending/Trending'
import Popular from './popular/Popular'
import TopRated from './TopRated/TopRated'

const Home = () => {
  return (
    <div className='homepage'>
      <Herobanner/>
      <Trending/> 
      <Popular/>
      <TopRated/>
    </div>
  )
}

export default Home
