import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Home/Footer/Footer'

export default function MainLayout() {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}
