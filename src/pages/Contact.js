//hon
import React from 'react'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

import './Contact.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Logo1 from '../images/C-logo-new.png'
import AnimatedLetters from '../AnimatedLetters/Animated'
import { IconContext } from 'react-icons'

function Contact() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const contactMe = ['C', 'O', 'N', 'T', 'A', 'C', 'T', '', 'M', 'E']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
            .sendForm(
                'service_4dphprm',
                'contact_form',
                refForm.current,
                'uY12zTmPrRG_hxHDJ'
            )
            .then(
                () => {
                    alert('Message has been sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('failed to send message, Please try again!')
                }
            )
    }
    return (
        <>
            <div className="contact-page">
                <div className="text-zone">
                    <div className="contact-letters">
                        <h1 className="contact-word">
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={contactMe}
                                idx={15}
                            />
                        </h1>
                    </div>
                    <div className="contact-form">
                        {/* <h1 className="contact-me">Contact ME</h1> */}
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required
                                    />
                                </li>
                                <li className="half">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input
                                        type="submit"
                                        className="flat-button"
                                        value="SEND"
                                        style={{ cursor: 'pointer' }}
                                    />
                                </li>
                                <p
                                    style={{
                                        fontSize: '20px',
                                    }}
                                >
                                    +1 (832)-732-3254
                                </p>
                            </ul>
                        </form>
                        {/* <img className="logo" src={Logo} alt="developer" /> */}
                    </div>
                </div>
            </div>
            <img className="logo-new" src={Logo1} alt="developer" />

            {/* <button style={{ color: 'blue' }}>alerttt</button> */}
            <Loader type="ball-grid-pulse" />
        </>
    )
}

export default Contact
