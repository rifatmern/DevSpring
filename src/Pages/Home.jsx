import React from 'react'
import Top from '../components/Top'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import ActiveCourses from '../components/ActiveCourses'
import DesignDev from '../components/DesignDev'

const Home = () => {
  return (
    <>
    {/* <Top/> */}
    <Navbar/>
    {/* <Menu/> */}
    <Banner/>
    <ActiveCourses/>
    <DesignDev/>
    </>
  )
}

export default Home
