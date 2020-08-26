//libraries
import React, {useState, useEffect} from 'react'
    // import {useSpring, animated, interpolate} from 'react-spring';
    // import {Spring} from 'react-spring/renderprops';
    // import lax from 'lax.js';
import {useLaxElement, useLax}  from 'use-lax'
import { motion } from "framer-motion"
//components
import Header from './Header.jsx'
//css
import './style/Home.scss'
//images
import logo from '../img/Logo.png'
import stamp from '../img/Stamp.svg'
// import airballoon from '../img/airballoon.png'
import cloud from '../img/cloud.svg'
import openCodetag from '../img/open-codetag.svg'
import closeCodetag from '../img/close-codetag.svg'
import slashCodetag from '../img/slash-codetag.svg'

export default function Home() {

    return (
        <>
            <section id="home" className="home-section">
                <Header />

                <div className="home-cta">
                    <div className="intro">
                        <div className="welcome">
                            <h3 className="greetings">Hi, I am</h3>
                            <h2 className="myname">Takky Chan</h2>
                        </div>
                        <div className="codetag-cta">
                            <img src={openCodetag} alt="" className="codetag open"/>
                                <div className="dynamic">
                                    <span className="i">I</span>
                                    <span className="word">DESIGN</span>
                                </div>
                            <img src={closeCodetag} alt="" className="codetag close"/>
                            <img src={slashCodetag} alt="" className="codetag slash"/>
                        </div>
                    </div>

                    <div className="intro-msg">
                        <div className="intro-card">
                            <div className="card-header">
                                <h5 className="aboutme">About Me</h5>
                                <div className="border"></div>
                            </div>
                            <p className="card-body">I am a Full Stack Web Developer and a Graphic Designer who are passionated, creative and a fast learner. I am also a fresh graduate from The Hong Kong Polytechnic Univesity. This website is my portfolio website, and I created it along from design, implementation to deployment, all from Scratch. I can do more than you think. If you are interested in my work, please continue to explore  OR</p>
                            <div className="card-footer">
                                <h5 className="resume">Download my resume</h5>
                                <div className="border"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}
