//libraries
import React, {useState, useEffect, useRef} from 'react'
import {Spring} from 'react-spring/renderprops'
import SmoothScroll from 'smooth-scroll'
import {TweenLite, Power3, gsap} from 'gsap'
//components
import Nav from './Nav.jsx'
//css
import './style/Header.scss'
//images
import logo from '../img/Logo.png'

export default function Header() {
    //GSAP
    const theHeader = useRef(null)

     useEffect(() => {
        TweenLite.from(
            theHeader.current, .8,{
                opacity: 0,
                y: -50,
                ease: Power3.easeInOut
            }
        )
    }, [])


    //Scroll
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        speedAsDuration: true
    }); 

    const [navItems, setNavItems] = useState([
        {
            link: '#home',
            name: 'Home',
            isActive: true
        },
        {
            link: '#milestone',
            name: 'Milstone',
            isActive: true
        },
        {
            link: '#skills',
            name: 'My Skills',
            isActive: true
        },
        {
            link: '#Gallery',
            name: 'Gallery',
            isActive: true
        },
        {
            link: '#contact',
            name: 'Contact Me',
            isActive: true
        }
    ]);

    return (
        <>
                <div className="header" ref={theHeader}>
                    <img src={logo} alt="" className="logo"/>
                
                    <Nav navItems = {navItems}/> 
                    
                </div>
        </>

    )
}
