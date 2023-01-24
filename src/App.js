import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </>
    )
}

export default App
