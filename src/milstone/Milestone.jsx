//libraries
import React, {useState, useEffect} from 'react'
    // import {useSpring, animated, interpolate} from 'react-spring';
    // import {Spring} from 'react-spring/renderprops';
    // import lax from 'lax.js';
    import {useLaxElement, useLax}  from 'use-lax'
    import { motion } from "framer-motion"
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


export default function Milstone() {
    // let starting = 1100;
    // let ending = 1250;
    const [MilestoneItems, setMilestoneItems] = useState([
        {
            type: 'education',
            link: 'mc',
            title: 'Methodist College',
            date:  '2009 - 2015',
            //ref: mc,
            isActive: true
        },
        {
            type: 'education',
            link: 'hkcc',
            title: 'HKCC Information Technology',
            date:  '2015 - 2017',
            //ref: hkcc,
            isActive: true
        },
        {
            type: 'career',
            link: 'developer',
            title: 'Web Developer',
            date:  '2017 - present',
            //ref: dev,
            isActive: true
        },
        {
            type: 'education',
            link: 'polyu',
            title: 'The Hong Kong Polytechnic University Information Security',
            date:  '2018 - 2020',
            //ref: polyu,
            isActive: true
        }
    ]);
    return (
        <>
            <section id="milestone" className="milestone-section">
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
                            if (isActive){
                            return (
                            <>
                                <div className={"items-container"}  id={type}>
                                    <span className="date">{date}</span>
                                    <div className="item-container" id={link}>
                                        <div id="item" className={link}>{title}</div>
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
