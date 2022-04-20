import React from 'react'
import Announcements from '../components/Announcements'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'



const Home = () => {
  return (
    <div>
        <Announcements />
        <NavBar/>
        <Slider />
        <Categories />
    </div>
  )
}

export default Home
