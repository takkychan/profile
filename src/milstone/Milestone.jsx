//libraries
import React, {useState, useEffect, useRef} from 'react'
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
    // import {useSpring, animated, interpolate} from 'react-spring';
    // import {Spring} from 'react-spring/renderprops';
    // import lax from 'lax.js';
    import {useLaxElement, useLax}  from 'use-lax'
    import {gsap} from 'gsap'
    import {ScrollTrigger} from 'gsap/ScrollTrigger'
//components

//css
import './style/Milestone.scss'
import airballoon from '../img/airballoon.png'
//images
import stampBlue from '../img/Stamp.svg'
import stampCream from '../img/Stamp-cream.svg'
import cloud from '../img/cloud.svg'
import openCodetag from '../img/open-codetag.png'
import closeCodetag from '../img/close-codetag.png'
import slashCodetag from '../img/slash-codetag.png'
//Dark
import openCodetagDark from '../img/open-codetag-dark.png'
import closeCodetagDark from '../img/close-codetag-dark.png'
import slashCodetagDark from '../img/slash-codetag-dark.png'

gsap.registerPlugin(ScrollTrigger)

export default function Milstone(props) {
        const {theme} = props
        let fl = useRef(null);
        let hkcc = useRef(null);
        let polyu = useRef(null);
        let dev = useRef(null);
        const milestone = useRef(null);

    const [MilestoneItems, setMilestoneItems] = useState([
        // {
        //     type: 'education',
        //     link: 'mc',
        //     title: 'Methodist College',
        //     date:  '2009 - 2015',
        //     ref: mc,
        //     isActive: true
        // },
        {
            type: 'education',
            link: 'hkcc',
            title: 'HKCC Information Technology',
            date:  '2015 - 2017',
            ref: hkcc,
            isActive: true
        },
        {
            type: 'career',
            link: 'developer',
            title: 'Web Developer',
            date:  '2017 - 2018',
            ref: dev,
            isActive: true
        },
        {
            type: 'career',
            link: 'freelance',
            title: 'Web Developer (Part-time)',
            date:  '2018 - present',
            ref: fl,
            isActive: true
        },
        {
            type: 'education',
            link: 'polyu',
            title: 'The Hong Kong Polytechnic University Information Security',
            date:  '2018 - 2020',
            ref: polyu,
            isActive: true
        }
    ]);

            //GSAP 
            useEffect(() =>{
                gsap.from(milestone.current, {
                    scrollTrigger: {
                        trigger: milestone.current,
                        toggleActions: "restart none none reverse", 
                        start: "bottom bottom"
                    },
                    y: 50,
                    x: -20,
                    opacity: 0,
                    duration: .5,
                    pin: true,
                    ease: "easeInOut",
                });
                MilestoneItems.forEach(MilestoneItem => {
                    const {ref, type} = MilestoneItem;
                    if (type === 'career') {
                        gsap.from(ref.current, {
                            scrollTrigger: {
                                trigger: ref.current,
                                toggleActions: "restart none none reverse", 
                            },
                            x: 50,
                            y: 150,
                            opacity: 0,
                            duration: .5,
                            pin: true,
                            ease: "ease",
                        });
                    }
                    else{
                    gsap.from(ref.current, {
                        scrollTrigger: {
                            trigger: ref.current,
                            toggleActions: "restart none none reverse",   
                        },
                        x: -50,
                        y: 150,
                        opacity: 0,
                        duration: .5,
                        pin: true,
                        ease: "ease",         
                    });
                }
                });
            }, [])
        


    return (
        <>
            <section id="milestone" className="milestone-section">
                <img src={stampBlue} alt="" className="stamp blue"/>
                <img src={stampCream} alt="" className="stamp cream"/>
                <div className="codetag-cta" ref={milestone}>
                            <img src= {theme == 'light' ? openCodetag : openCodetagDark} alt="" className="codetag open"/>
                                <div className="section-header">
                                    Milestone
                                </div>
                            <img src= {theme == 'light' ? closeCodetag : closeCodetagDark} alt="" className="codetag close"/>
                            <img src= {theme == 'light' ? slashCodetag : slashCodetagDark} alt="" className="codetag slash"/>
                </div>
                <img src={airballoon} alt="" className="airballoon"/>
                <div className="milestone-cta">
                    {/* <div className="codetag-cta">
                        <img src={openCodetag} alt="" className="codetag open"/>
                        <div className="section-header">
                            Milestone
                        </div>
                        <img src={closeCodetag} alt="" className="codetag close"/>
                        <img src={slashCodetag} alt="" className="codetag slash"/>
                    </div> */}
              

                    <div className="timeline">
                        <div className="banner-cta">
                            <div className="banner education"><span>Education</span></div>
                            <div className="banner career"><span>Career</span></div>
                        </div>
                        {MilestoneItems.map(MilestoneItem => {
                            const {date, title, type, link, isActive} = MilestoneItem;
                            let{ref} = MilestoneItem;
                            if (isActive){
                            return (
                            <>
                                <div className={"items-container"}>
                                    <div className="items-wrapper"   id={type} ref={ref}>
                                        <span className="date">{date}</span>
                                        <div className="item-container" id={link}>
                                            <div id="item" >{title}</div>
                                        </div>
                                    </div> 
                                </div>
                            </>
                            )
                            }
                        }
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
