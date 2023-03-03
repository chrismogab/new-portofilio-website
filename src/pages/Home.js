import React from 'react'
import './Home.css'
import Loader from 'react-loaders'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//     faAngular,
//     faCss3,
//     faGit,
//     faGitAlt,
//     faHtml5,
//     faJs,
//     faJsSquare,
//     faReact,
// } from '@fortawesome/free-brands-svg-icons'
import {
    FaGithub,
    FaLinkedin,
    FaDiscord,
    FaHtml5,
    FaReact,
    FaJsSquare,
    FaCss3,
} from 'react-icons/fa'

import { Link } from 'react-router-dom'

function Home() {
    // add click here button tabaa l marketplace to go to website code
    // add about button

    return (
        <>
            <div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            {/* <FontAwesomeIcon icon={faReact} color="#DD0031" /> */}
                            <FaReact color="#DD0031" />
                        </div>
                        <div className="face2">
                            {/* <FontAwesomeIcon icon={faHtml5} color="#F06529" /> */}
                            <FaHtml5 color="#F06529" />
                        </div>
                        <div className="face3">
                            {/* <FontAwesomeIcon icon={faCss3} color="#28A4D9" /> */}
                            <FaCss3 color="#28A4D9" />
                        </div>
                        <div className="face4">
                            {/* <FontAwesomeIcon
                        
                                icon={faJsSquare}
                                color="#5ED4F4"
                            /> */}
                            <FaJsSquare color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            {/* <FontAwesomeIcon icon={faReact} color="#EFD81D" /> */}
                            <FaReact color="#DD0031" />
                        </div>

                        <div className="face6">
                            {/* <FontAwesomeIcon
                                icon={faJsSquare}
                                color="#EC4D28"
                            /> */}
                            <FaJsSquare color="#5ED4F4" />
                        </div>
                    </div>
                </div>
                <div className="two">
                    <a
                        href="https://github.com/chrismogab/new-portofilio-website"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="code-button">Website Code</button>
                    </a>
                    <Link to="/Portfolio">
                        <button className="portfolio-button">PORTFOLIO</button>
                    </Link>
                </div>
            </div>

            <Loader type="ball-grid-pulse" />
        </>
    )
}

export default Home
