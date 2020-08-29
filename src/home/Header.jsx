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
            link: '#footer',
            name: 'Contact Me',
            isActive: true
        }
    ]);

    return (
        <>     
                <div className="hamburger-menu">
                        <input type="checkbox" className="toggler" onChange={() => {
                            !openMenu ?  document.body.style.overflowY = 'hidden' :  document.body.style.overflowY = 'unset';
                            setOpenMenu(!openMenu)
                        }}/>
                        <div className="hamburger">
                        <div></div>
                        </div>
                </div>
                    <div className="burger-header" style={openMenu ? {transform: "translate(0, 0)"} : {transform: "translate(100%, 0)"}}>
                        <Nav navItems = {navItems}/> 
                        <div className="media-cta">
                        <a href="https://github.com/takkychan/profile" target="_blank" className="github"> <i class="fab fa-github"></i> <div className="media-name">Github</div></a>
                        <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=takkychancnt@gmail.com"  target="_blank" className="email"> <i class="fas fa-envelope"></i> <div className="media-name"><a>takkychanant@gmail.com</a></div></a>
                        <a className="phone"> <i class="fas fa-mobile-alt"></i><div>69088999</div></a>
                    </div>
                    </div>
                <div className="header" ref={theHeader}>
             
                    <img src= {theme == 'light'? logo : logoDark} 
                    alt="" className="logo"/> 
             
                    <Nav navItems = {navItems}/> 
                </div>
        </>

    )
}
