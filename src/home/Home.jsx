//libraries
import React, {useState, useEffect, useRef} from 'react'
import {TweenLite, Power3, gsap} from 'gsap'
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
import openCodetag from '../img/open-codetag.png'
import closeCodetag from '../img/close-codetag.png'
import slashCodetag from '../img/slash-codetag.png'
//Dark Mode
import cloudDark from '../img/cloud-dark.svg'
import openCodetagDark from '../img/open-codetag-dark.png'
import closeCodetagDark from '../img/close-codetag-dark.png'
import slashCodetagDark from '../img/slash-codetag-dark.png'
//resume
import ChanHokWanTakkyResume from '../img/ChanHokWanTakky.pdf'


export default function Home(props) {
    const {theme} = props
    const greetings = useRef(null)
    const dynamic = useRef(null)
    const introMsg = useRef(null)

     useEffect(() => {
        TweenLite.from(
            greetings.current, .8,{
                opacity: 0,
                y: -5,
                x: -100,
                delay: .4,
                ease: Power3.easeInOut
            }
        )
        TweenLite.from(
            introMsg.current, .8,{
                opacity: 0,
                y: -5,
                x: 100,
                delay: .8,
                ease: Power3.easeInOut
            }
        )
        TweenLite.from(
            dynamic.current, .8,{
                opacity: 0,
                y: 100,
                delay: 1.2,
                ease: Power3.easeInOut
            }
        )
        
    }, [])


    return (
        <>
            <section id="home" className="home-section">
                <Header theme = {theme}/>
                <img src={cloud} alt="" className="cloud-img left"/>
                <img src={cloud} alt="" className="cloud-img right"/>
                <div className="home-cta">
                    <div className="intro">
                        <div className="welcome"  ref={greetings}>
                            <h3 className="greetings">Hi, I am</h3>
                            <h2 className="myname">Takky Chan</h2>
                        </div>
                        <div className="codetag-cta" ref={dynamic}>
                            <img src={theme == 'light' ? openCodetag : openCodetagDark} alt="" className="codetag open"/>
                                <div className="dynamic">
                                    <span className="i">I</span>
                                    <span className="word"></span>
                                </div>
                            <img src={theme == 'light' ? closeCodetag : closeCodetagDark} alt="" className="codetag close"/>
                            <img src= {theme == 'light' ? slashCodetag : slashCodetagDark} alt="" className="codetag slash"/>
                        </div>
                    </div>

                    <div className="intro-msg" >
                        <div className="intro-card" ref={introMsg}>
                            <div className="card-header">
                                <h5 className="aboutme">About Me</h5>
                                <div className="border"></div>
                            </div>
                            <p className="card-body">I am a Full Stack Web Developer and a UI/UX Designer who are passionated, creative and a fast learner. Meanwhile, I am also a fresh graduate from The Hong Kong Polytechnic Univesity. This website is my portfolio website, and I created it along from design, implementation to deployment, all from scratch. I always keep updating and equip myself with the latest technology and new features. If you are interested in my work, please continue to explore  OR</p>
                            <div className="card-footer">
                                <a href={ChanHokWanTakkyResume} download="(CV)ChanHokWanTakky" className="resume"><i class="fas fa-download"></i>Download my resume</a>
                                <div className="border"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}
