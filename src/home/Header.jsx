//libraries
import React, {useState, useEffect, useRef} from 'react'
import {Spring} from 'react-spring/renderprops'
import SmoothScroll from 'smooth-scroll'
import {TweenLite, Power3, gsap} from 'gsap'
import {CSSTransition} from 'react-transition-group';
//components
import Nav from './Nav.jsx'
//css
import './style/Header.scss'
//images
import logo from '../img/Logo.png'
import logoDark from '../img/Logo-dark.png'

export default function Header(props) {
    //GSAP
    const [openMenu, setOpenMenu] = useState(false)
    const {theme} = props
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
            id: 'home',
            link: '#home',
            name: 'Home',
            isActive: true
        },
        {
            id: 'milestone',
            link: '#milestone',
            name: 'Milstone',
            isActive: true
        },
        {
            id: 'skills',
            link: '#skills',
            name: 'My Skills',
            isActive: true
        },
        {
            id: 'gallery',
            link: '#Gallery',
            name: 'Gallery',
            isActive: false
        },
        {
            id: 'contact',
            link: 'mailto:takkychancnt@gmail.com',
            name: 'Contact Me',
            isActive: true
        }
    ]);

    return (
        <>     
                <div className="hamburger-menu">
                        <input type="checkbox" className="toggler" onChange={() => {
                            !openMenu ?  document.body.style.overflow = 'hidden' :  document.body.style.overflow = 'unset';
                            setOpenMenu(!openMenu)
                        }}/>
                        <div className="hamburger">
                        <div></div>
                        </div>
                </div>
                {/* {
                    openMenu ? 
                    <div className="burger-header">
                        <Nav navItems = {navItems}/> 
                    
                    </div>
                    :
                    null
                } */}
                    <div className="burger-header" style={openMenu ? {right: "0"} : {right: "-150%"}}>
                        <Nav navItems = {navItems}/> 
                    </div>
                <div className="header" ref={theHeader}>
             
                    <img src= {theme == 'light'? logo : logoDark} 
                    alt="" className="logo"/> 
             
                    <Nav navItems = {navItems}/> 
                </div>
        </>

    )
}
