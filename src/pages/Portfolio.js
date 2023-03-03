import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/Animated'
import React, { useEffect, useState, useRef } from 'react'
import LinkedinPhoto from '../images/chris-linkedin-photo.jpg'
import './Portfolio.css'
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa'
import Resume from '../images/chris_resume.pdf'
import { Link } from 'react-router-dom'

function About() {
    //rename to about
    //add portofilio / projects button
    //add skills
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const chrisName = ['C', 'H', 'R', 'I', 'S', 'T', 'O', 'P', 'H', 'E', 'R']
    const chrisLastName = ['M', 'O', 'G', 'H', 'A', 'B', 'G', 'H', 'A', 'B']

    return (
        <>
            <div>
                <div className="name-letters">
                    <h1 style={{ fontSize: '4rem', letterSpacing: '-1.1rem' }}>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={chrisName}
                            idex={22}
                        />
                    </h1>
                    <br />
                    <h2 style={{ fontSize: '4rem', letterSpacing: '-1.1rem' }}>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={chrisLastName}
                            idex={15}
                        />
                    </h2>
                </div>

                <p className="hi">
                    Hi, <br />
                    Welcome to my portfolio <br />
                </p>
                <span className="welcome-phone">Welcome To My Portfolio</span>

                <div className="circle">
                    <div className="outer-circle">
                        <div className="middle-circle">
                            <div className="inner-circle">
                                <img
                                    className="photo "
                                    src={LinkedinPhoto}
                                    alt="logo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <a
                        className="pdf-link"
                        href={Resume}
                        download="Christopher Moghabghab Resume"
                    >
                        <button className="pdf-button" type="submit">
                            DOWNLOAD CV
                        </button>
                    </a>
                </div>
                <div className="icons-div">
                    <ul className="icons">
                        <li>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/chrismogab"
                            >
                                <FaGithub />
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.linkedin.com/in/christophermoghabghab/"
                            >
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/chrismogab"
                            >
                                <FaDiscord />
                            </a>
                        </li>
                    </ul>
                </div>
                <Link to="/Projects">
                    <button className="projects-button">
                        Click here for Projects
                    </button>
                </Link>
            </div>
            <Loader type="ball-grid-pulse" />
        </>
    )
}

export default About
