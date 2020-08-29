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
                    <div className="media-cta">
                        <a href="https://github.com/takkychan/profile" target="_blank" className="github"> <i class="fab fa-github"></i> <div className="media-name">Github</div></a>
                        <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=takkychancnt@gmail.com"  target="_blank" className="email"> <i class="fas fa-envelope"></i> <div className="media-name"><a>takkychanant@gmail.com</a></div></a>
                        <a className="phone"> <i class="fas fa-mobile-alt"></i><div>69088999</div></a>
                    </div>
                    <div className="copyright">
                        Copyright © TCDESIGN @ Chan Hok Wan Takky 2020 - A Full stack web developer in Hong Kong 
                    </div>
                </div>
            </section>
        </>
    )
}
