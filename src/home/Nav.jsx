import React, {useState} from 'react'
import {Spring} from 'react-spring/renderprops'
import SmoothScroll from 'smooth-scroll'
//images
import hamburger from '../img/hamburger.svg'

export default function Nav(props) {
    const  {navItems} = props;
    return (
        <ul className="nav-items">
            {navItems.map(navItem => 
                navItem.isActive ? 
                <li>
                    <a data-scroll href={navItem.link} className="nav-item">{navItem.name}</a>
                </li>
                : null
            )}

            {/* {navItems.map(navItems.isActive ? ()=>(
                <li><a data-scroll href={navItems.link} className="item">{name}</a></li>
            ))} */}
            {/* <button className="hamburger">
                <img src={hamburger} alt=""/>
            </button> */}
            <img src={hamburger} alt="" className="hamburger"/>
        </ul>
        
    )
}
