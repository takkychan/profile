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
                
            </section>
        </>
    )
}
