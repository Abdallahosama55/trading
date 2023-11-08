import React, { Fragment } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import {  TickerTape } from "react-tradingview-embed";

import { Outlet, Link } from "react-router-dom";
import Navbar_comp from '../../components/Navbar/Navbar';

function Layout() {
  return (
    <Fragment>

   <Navbar_comp/>

   <Outlet />
<Footer/>
   </Fragment>
  )
}

export default Layout