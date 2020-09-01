//libraries
import React, {useState, useEffect, useRef} from 'react'
import {TweenLite, Power3, gsap} from 'gsap'
    // import {useSpring, animated, interpolate} from 'react-spring';
import {useSpring, animated, interpolate} from 'react-spring';
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
    //Spring Parallex animation
    const [parallex, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 15, tension: 1500, friction: 100 } }))
    const [parallex2, set2] = useSpring(() => ({ xy: [0, 0], config: { mass: 15, tension: 1500, friction: 100 } }))
    const calc1 = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
    const calc2 = (x, y) => [x - window.innerWidth / 1.7, y - window.innerHeight / 1.7]
    const trans1 = (x, y) => `translate3d(${x / 20}px,${y / 10}px,0)`
    const trans2 = (x, y) => `translate3d(${x / -20}px,${y / -10}px,0)`

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
            <section id="home"   className="home-section">
                <Header theme = {theme}/>
                <div className="cloudLeft-cta" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc1(x, y) })}>   <animated.img src={cloud} alt=""  style={{ transform: parallex.xy.interpolate(trans1) }}className="cloud-img left"/> </div>
                <div className="cloudLeft-cta" onMouseMove={({ clientX: x, clientY: y }) => set2({ xy: calc2(x, y) })}>   <animated.img src={cloud} alt=""  style={{ transform: parallex2.xy.interpolate(trans2) }}className="cloud-img right"/> </div>
       
                <div className="home-cta">
                    <div className="intro">
                        <div className="welcome"  ref={greetings}>
                            <h3 className="greetings">Hi, I am</h3>
                            <h2 className="myname">
                                <span className="t">T</span>
                                <span className="a">a</span>
                                <span className="k">k</span>
                                <span className="kk">k</span>
                                <span className="y">y</span>
                                <span className="backspace"> </span>
                                <span className="c">C</span>
                                <span className="h">h</span>
                                <span className="aa">a</span>
                                <span className="n">n</span>
                           </h2>
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
                            <p className="card-body">I am a Full Stack Web Developer and a UI/UX Designer who are passionated, creative and a fast learner. Meanwhile, I am also a fresh graduate from The Hong Kong Polytechnic Univesity. This website is my profile website. It was created along from design, implementation to deployment, all from scratch. I always keep update and equip myself with the latest technology and new features. If you are interested in my work, please continue to explore  OR</p>
                            <div className="card-footer">
                                <a href={ChanHokWanTakkyResume} download="(CV)ChanHokWanTakky" target="_blank" className="resume"><i class="fas fa-download"></i>Download my resume</a>
                                <div className="border"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}
