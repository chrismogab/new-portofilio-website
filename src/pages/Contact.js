import React from 'react'
import { useEffect, useState } from 'react'
import './Contact.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Logo from '../images/C-logo.png'

function Contact() {
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
            <div className="container contact-page">
                <div className="text-zone">
                    <div className="contact-form">
                        <h1 className="contact-me">Contact ME</h1>
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
                                // style={{
                                //     position: 'absolute',
                                //     marginTop: '310px',
                                //     marginLeft: '10px',
                                //     color: '#ffd700',
                                // }}
                                >
                                    +1 (832) 732 3254
                                </p>
                            </ul>
                        </form>
                        <img className="logo" src={Logo} alt="developer" />
                    </div>
                </div>
            </div>
            <img className="logo" src={Logo} alt="developer" />

            {/* <button style={{ color: 'blue' }}>alerttt</button> */}
        </>
    )
}

export default Contact
