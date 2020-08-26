//libraries
import React, {useState} from 'react'
import {Spring} from 'react-spring/renderprops'
import SmoothScroll from 'smooth-scroll'
//components
//css
import './style/Footer.scss'
//images


export default function Footer() {
    return (
        <>
            <section id="footer" className="footer">
                <div className="footer-container">
                    <div className="copyright">
                        Copyright © TCDESIGN @ Chan Hok Wan Takky 2020 - A Full stack web developer in Hong Kong 
                    </div>
                </div>
            </section>
        </>
    )
}
