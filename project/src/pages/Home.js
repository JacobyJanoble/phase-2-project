import React from 'react'
import Announcements from '../components/Announcements'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products.js'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'



const Home = () => {
  return (
    <div>
        <Announcements />
        <NavBar/>
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home
