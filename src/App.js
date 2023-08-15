import { useState } from 'react'
import './App.scss'
import Navbar from './Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Game from './pages/Game/Game'
import Projects from './pages/Projects'
// import background_image from './images/grey-background.jpg'

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/Challenge" element={<Game />} />
                <Route path="/" element={<Home />} />
                <Route path="/Portfolio" element={<Portfolio />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Projects" element={<Projects />} />
            </Routes>
        </>
    )
}

export default App



