import React from 'react'
import './Projects.css'
import Loader from 'react-loaders'
import real_time_1 from '../images/real-time-3.jpg'
import real_time_2 from '../images/real-time-2.jpg'
import real_time_3 from '../images/real-time-1.jpg'
import token_1 from '../images/token-andr-1.jpg'
import token_2 from '../images/token-andr-2.jpg'
import token_3 from '../images/token-andr-3.jpg'
import movie_1 from '../images/movie-1.jpg'
import movie_2 from '../images/movie-2.jpg'
import movie_3 from '../images/movie-3.jpg'
import mySql_1 from '../images/mysql-1.jpg'
import mySql_2 from '../images/mysql-2.jpg'
import mySql_3 from '../images/mysql-3.jpg'

function Projects() {
    return (
        <>
            <div className="project-main">
                <div className="first-div">
                    <img
                        className="real-time-1"
                        src={real_time_1}
                        alt="photo-1"
                    />
                    <img
                        className="real-time-2"
                        src={real_time_2}
                        alt="photo-2"
                    />
                </div>
                <div className="second-div">
                    <img
                        className="real-time-3"
                        src={real_time_3}
                        alt="photo-3"
                    />
                    <ul className="parag-1">
                        <li>
                            <strong>About:</strong>
                            <br />
                            This website provides the real-time prices of some
                            crypto currency pairs. I used websockets and APIs to
                            get the real time prices and bid/ask prices of
                            currency pairs. The ladderview shows the difference
                            between the bid and ask price. All prices are
                            continuosly moving live, even the chart itself.
                        </li>
                        <li>
                            <strong>Tech-Stacks used:</strong>
                            <br />
                            ReactJS, Javascript, HTML, CSS, ChakraUI
                        </li>
                        <li>
                            <strong>
                                Link to Code: <br />
                            </strong>
                            <a href="https://github.com/chrismogab/Real-time-data">
                                https://github.com/chrismogab/Real-time-data
                            </a>{' '}
                        </li>
                    </ul>
                </div>{' '}
                <div className="third-div">
                    <img className="token-1" src={token_1} alt="photo-4" />
                    <img className="token-2" src={token_2} alt="photo-5" />
                </div>
                <div className="fourth-div">
                    <img className="token-3" src={token_3} alt="photo-6" />
                    <ul className="parag-2">
                        <li>
                            <strong>About:</strong>
                            <br />
                            This is a full-stack project where I integrated
                            CosmWasm (back-end) with ReactJS and
                            Typescript(front-end). This is a marketplace that
                            allows users to purachse our own CW20 tokens using
                            USDC and USDT after connecting to their wallet
                            address. It displays how many tokens these uesers
                            own after their purchase, the price of tokens, and
                            how many tokens are left for sale.
                        </li>
                        <li>
                            <strong>Tech-Stacks used:</strong>
                            <br />
                            ReactJS, Javascript, HTML, CSS, CosmWasm, Rust
                        </li>
                        <li>
                            <strong>
                                Link to Code: <br />
                            </strong>
                            <a href="https://github.com/chrismogab/DAF-Front-End">
                                https://github.com/chrismogab/DAF-Front-End
                            </a>{' '}
                        </li>
                    </ul>
                </div>
                <div className="fifth-div">
                    <img className="movie-1" src={movie_1} alt="photo-7" />
                    <img className="movie-2" src={movie_2} alt="photo-8" />
                </div>
                <div className="sixth-div">
                    <img className="movie-3" src={movie_3} alt="photo-9" />
                    <ul className="parag-3">
                        <li>
                            <strong>About:</strong>
                            <br />
                            'The classic movies'. I used a backend API URL to
                            collect all the data from a URL that has an array of
                            all classic movies with their information. All you
                            have to do is fill in the search bar and the rest is
                            their. It automatically gives you all possible
                            options for what was in the search bar.
                        </li>
                        <li>
                            <strong>Tech-Stacks used:</strong>
                            <br />
                            ReactJS, Javascript, HTML, CSS, Redux
                        </li>
                        <li>
                            <strong>
                                Link to Code: <br />
                            </strong>
                            <a href="https://github.com/chrismogab/Front-End-random-website">
                                https://github.com/chrismogab/Front-End-random-website
                            </a>{' '}
                        </li>
                    </ul>
                </div>{' '}
                <div className="seventh-div">
                    <img className="mysql-1" src={mySql_1} alt="photo-10" />
                    <img className="mysql-2" src={mySql_2} alt="photo-11" />
                </div>
                <div className="eighth-div">
                    <img className="mysql-3" src={mySql_3} alt="photo-12" />
                    <ul className="parag-4">
                        <li>
                            <strong>About:</strong>
                            <br />
                            This project is still in action. I am working on a
                            portfolio to prove my full-stack skills using JS. I
                            created a table for users to insert info and I get
                            the info at the backend using MySQL database.The
                            users have access to create a new contact, as well
                            as edit, delete and view contacts. I keep track on
                            every action being done on mysql workbench
                        </li>
                        <li>
                            <strong>Tech-Stacks used:</strong>
                            <br />
                            ReactJS, Javascript, HTML, CSS, MySQL, Node.js,
                            express
                        </li>
                        <li>
                            <strong>
                                Link to Code: <br />
                            </strong>
                            <a href="https://github.com/chrismogab/Front-End-random-website">
                                https://github.com/chrismogab/Front-End-random-website
                            </a>{' '}
                        </li>
                    </ul>
                </div>
            </div>
            <Loader type="ball-grid-pulse" />
        </>
    )
}

export default Projects
