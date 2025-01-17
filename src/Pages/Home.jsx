import React from 'react'
import Top from '../components/Top'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import ActiveCourses from '../components/ActiveCourses'
import DesignDev from '../components/DesignDev'
import Market from '../components/Market'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    {/* <Top/> */}
    <Navbar/>
    {/* <Menu/> */}
    <Banner/>
    <ActiveCourses/>
    <DesignDev/>
    <Market/>
    <Footer/>
    </>
  )
}

export default Home
