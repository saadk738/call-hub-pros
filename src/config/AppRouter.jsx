import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import NavBar from '../components/navBar/NavBar';
import Services from '../pages/services/Services';



export default function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/About' element={<About />}></Route>
                    <Route path='/Services' element={<Services/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}