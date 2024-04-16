import React from 'react'
import Navbar from '../Navbar/Navbar'
import Frontvideo from '../Navbar/Frontvideo/Frontvideo'
import Couraisol from '../Navbar/Frontvideo/Couraisol/Couraisol'
import SearchCatagory from '../Navbar/Frontvideo/Couraisol/SearchCatagory/SearchCatagory'
import Market from '../Navbar/Frontvideo/Couraisol/SearchCatagory/AfterMarketProducts/Market'
import Brand from '../Brand/Brand'
import { Outlet } from 'react-router-dom'



const Home = ()=> {
  return (
    <div>
        {/* <Navbar/> */}
        <Frontvideo/>
        <Couraisol/>
        <SearchCatagory />
        <Market />
        <Brand />
        
        <Outlet/>
    </div>
  )
}

export default Home