import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Game from './pages/Game/Game'

function App() {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/Challenge" element={<Game />} />
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </>
    )
}

export default App
