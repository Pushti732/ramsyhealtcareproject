import React from 'react'
import logo from './img2.png'
import candidate from './img3.png'
import client from './img4.png'
import upload from './img5.png'
import search from './img6.png'
import front from './img7.png'
import arrow from './img8.png'
import smallarrow from './img10.png'
import friend from './img11.png'
import edit from './img12.png'
import rectgangle from './img13.png'
import recttxt from './img14.png'
import robo from './img15.png'
import icn1 from './img16.png'
import icn2 from './img17.png'
import icn3 from './img18.png'
import footerlogo  from './img19.png'


function MainComponent() {
    return (
        <div className='div-main-outer'>
            <div className='div-stroke'></div>
            <div className='div-home'>
                <img className='img-main' src={logo} />
                <div className='div-inner-home'>


                    <p className='home-p1'>Empowering creators and elevating ideas</p>
                    <p className='home-p2'>Browse 5000 Permanent & Contract Jobs</p>
                    <div className='div-home-buttons'>
                        <div >
                            <img className='img-candidate' src={candidate} alt='candidate' />
                        </div>
                        <div> <p>Login</p></div>
                        <div>
                            <img className='img-candidate' src={client} alt='client' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='div-message'>
                <div className='div-message-inner'>
                    <h1> Register to receive job alerts</h1>
                    <p>
                        Consider how much easier it would be if securing your next role was simply a couple of clicks away. That once registered, you only ever hear about jobs that tick every box. Where you can relax and even enjoy the process. At ramsy, we pair our candidates with roles we know are a direct match to their skills, knowledge, experience and future aspirations.​ Upload your CV to get started!
                    </p>
                    <img className='img-upload' src={upload} alt='upload' />
                </div>

            </div>
            <div className='div-input'>
                <div className='div-input-inner'>
                    <h1>Looking for a job?</h1>
                    <p>Search the ramsyhealthcare website for specific pages, resources, blogs or jobs.</p>
                    <div className='div-input-text'>
                        <input type='text' placeholder='Type here...' />
                        <img className='img-search' src={search} alt='upload' />
                    </div>
                </div>
            </div>
            <div className='div-findout'>
                <div className='div-findout-desc'>
                    <div className='div-inner-findout-desc'>
                        <p className='findout-p1'>Why&nbsp;<b>Ramsy Healthcare?</b> </p>
                        <p>At Ramsy Health Care Ltd, we are dedicated to delivering exceptional community and domiciliary care support services to our clients. Our highly trained workforce is committed to providing compassionate care that upholds the dignity of our service users while promoting their independence and freedom of choice.</p>
                        <div className='div-findout-more'>
                            <p>Find out More</p>
                        </div>

                    </div>

                </div>

                <div className='div-findout-img'>
                    <div className='div-findout-inner-img'>
                        <div className='div-image-front'>
                            <img className='img-front' src={front} alt='front' />
                        </div>
                        <div className='div-image-inner'></div>
                    </div>
                </div>
            </div>
            <div className='div-inner-opt'>
                <p>Privacy | Dignity | Independence | Security | Choice</p>

            </div>
            <div className='div-options'>
                <div className='div-inner-options'>
                    <div className='div-opt1'>
                        <div className='div-outer-opt1'>
                            <div className='div-inner-opt1'>
                                <h1>Quick Register</h1>
                                <img src={arrow} />
                            </div>
                            <p>Register your interest or apply for a vacancy.We’ll Get in touch to explore your work preferences.</p>
                            <div className='div-arrow-txt'>
                                <img src={smallarrow} />
                                <p>Register now</p>
                            </div>
                        </div>
                    </div>
                    <div className='div-opt2'>
                        <div className='div-outer-opt2'>
                            <div className='div-inner-opt2'>
                                <h1>Refer a Friend</h1>
                                <img src={friend} />
                            </div>
                            <p>Refer your friends to us and receive a bonus From Ramsy Health care.</p>
                            <div className='div-arrow-txt'>
                                <img src={smallarrow} />
                                <p>Refer friend</p>
                            </div>
                        </div>
                    </div>
                    <div className='div-opt3'>
                        <div className='div-outer-opt3'>
                            <div className='div-inner-opt3'>
                                <h1>Job Creator</h1>
                                <img src={edit} />
                            </div>
                            <p>Tell us what you are looking for and we will Build an agency for job package that suits you Perfectly.</p>
                            <div className='div-arrow-txt'>
                                <img src={smallarrow} />
                                <p>Create your job</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='div-robo'>
                <div className='div-outer-robo'>

                    <div className='div-img-rect'>
                        <img src={rectgangle} />
                    </div>
                    <div className='div-img-robo-txt'>
                        <img className='img-robo' src={robo} alt='robo' />
                        <img className='img-rect-txt' src={recttxt} />
                    </div>
                </div>
            </div>
            <div className='div-footer'>
                <div className='div-fot'>
                    <div className='div-inner-footer'>
                        <div className='footer-1'>
                            <h2>Who we are</h2>
                            <p>About Us</p>
                            <p>What We Do</p>
                            <p>Blog</p>
                            <p>Contact Us</p>
                            <p>Modern Slavery</p>
                        </div>
                        <div className='footer-2'>
                            <h2>Recruitment</h2>
                            <p>Jobs & vacancies</p>
                            <p>Login & Signup</p>
                            <p>Job Dashboard</p>
                            <p>Privacy Policy</p>
                            <p>Terms & conditions</p>
                        </div>
                        <div className='footer3'>
                            <h2>Contact Us</h2>
                            <div className='div-icn'>
                                <img src={icn1} alt='icon' />
                                <p>422 High Street North, London E12 6RH, UK</p>
                            </div>
                            <div className='div-icn'>
                                <img src={icn2} alt='icon' />
                                <p>+44 (0)20 3500 1100 | Mon-Fri : 9am-6pm</p>
                            </div>
                            <div className='div-icn'>
                                <img src={icn3} alt='icon' />
                                <p>info@ramsyhealthcare.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='footer-line'></div>
                    <p className='div-inner-p'>Copyright © 2023 Ramsy Health Care Ltd. All rights reserved</p>
                    <div className='footer-logo'>
                    {/* <img  src={footerlogo}/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainComponent