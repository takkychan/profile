//libraries
import React, {useState, useEffect} from 'react'
import Modal from 'react-modal'
    // import {useSpring, animated, interpolate} from 'react-spring';
    // import {Spring} from 'react-spring/renderprops';
    // import lax from 'lax.js';
import {useLaxElement, useLax}  from 'use-lax'
    // import { motion } from "framer-motion"
//components
import Puzzle from './Puzzle.jsx';
//css
import './style/Skills.scss'
//images
import stampBlue from '../img/Stamp.svg'
import stampCream from '../img/Stamp-cream.svg'
import cloud from '../img/cloud.svg'
import openCodetag from '../img/open-codetag.png'
import closeCodetag from '../img/close-codetag.png'
import slashCodetag from '../img/slash-codetag.png'
import crawl from '../img/Crawl.svg'
import basicEgg from '../img/basic-egg.png'
import frontendEgg from '../img/frontend-egg.png'
import backendEgg from '../img/backend-egg.png'
import cloudEgg from '../img/cloud-egg.png'
import graphicEgg from '../img/graphic-egg.png'
import othersEgg from '../img/others-egg.png'
//puzzle
import puzzle from '../img/skillItem/puzzle.svg'
//basic
import google from '../img/skillItem/google.svg'
import html from '../img/skillItem/html.svg'
import css from '../img/skillItem/css.svg'
import sass from '../img/skillItem/sass.svg'
//frontend
import react from '../img/skillItem/react.svg'
import bootstrap from '../img/skillItem/bootstrap.svg'
import jquery from '../img/skillItem/jquery.svg'
import responsive from '../img/skillItem/responsive.svg'
//backend
import nodejs from '../img/skillItem/nodejs.svg'
import php from '../img/skillItem/php.svg'
import mongo from '../img/skillItem/mongo.svg'
import mysql from '../img/skillItem/mysql.svg'
//cloud
import aws from '../img/skillItem/aws.svg'
//graphic
import figma from '../img/skillItem/figma.svg'
import ps from '../img/skillItem/ps.svg'
import xd from '../img/skillItem/xd.svg'
import pr from '../img/skillItem/pr.svg'
import ai from '../img/skillItem/ai.svg'
//others
import git from '../img/skillItem/git.svg'
import github from '../img/skillItem/github.svg'
import wordpress from '../img/skillItem/wordpress.svg'
//formodal
import arrow from '../img/arrow.svg'
import close from '../img/close.svg'



export default function Skills() {

    const SkillsList = [
        {
            title:  'Web Basic',
            link:   'basic',
            img:    basicEgg,
            des:    'Basic knowledge and fundamentals for modern web development',
            isActive: true,
            //ref:    basic,
            item:   [
                {
                    skillName: "Google Search",
                    rating: 5,
                    skillImg: google,
                },
                {
                    skillName: "HTML",
                    rating: 4,
                    skillImg: html
                },
                {
                    skillName: "CSS",
                    rating: 4,
                    skillImg: css
                },
                {
                    skillName: "SASS",
                    rating: 4,
                    skillImg: sass
                }
            ]
        },
        {
            title:  'Front-end skills',
            link:   'frontend',
            img:    frontendEgg,
            des:     'Frameworks, knowledges, senses and whatever user can see or feel',
            isActive: true,
            //ref:    frontend,
            item:   [
                {
                    skillName: "React",
                    rating: 3.5,
                    skillImg: react
                },
                {
                    skillName: "Bootstrap",
                    rating: 4,
                    skillImg: bootstrap
                },
                {
                    skillName: "Jquery",
                    rating: 4,
                    skillImg: jquery
                },
                {
                    skillName: "Responsive",
                    rating: 4,
                    skillImg: responsive
                }
            ]
        },
        {
            title:  'Back-end skills',
            link:   'backend',
            img:     backendEgg,
            des:     'Handling data, security and performance',
            isActive: true,
            //ref:    backend,
            item:   [
                {
                    skillName: "NodeJS",
                    rating: 3,
                    skillImg: nodejs
                },
                {
                    skillName: "PHP",
                    rating: 4,
                    skillImg: php
                },
                {
                    skillName: "Mysql",
                    rating: 4,
                    skillImg: mysql
                },
                {
                    skillName: "MongoDB",
                    rating: 3,
                    skillImg: mongo
                }
            ]
        },
        {
            title:  'Graphic Skills',
            link:   'graphic',
            img:    graphicEgg,
            des:    'Experience of graphical edits and creation.',
            isActive: true,
            //ref:    graphic,
            item:   [
                {
                    skillName: "Adobe XD",
                    rating: 4.5,
                    skillImg: xd
                },
                {
                    skillName: "Figma",
                    rating: 4,
                    skillImg: figma
                },
                {
                    skillName: "Adobe Photoshop",
                    rating: 4,
                    skillImg: ps
                },
                {
                    skillName: "Adobe Premeire Pro",
                    rating: 5,
                    skillImg: pr
                },
                {
                    skillName: "Adobe Illustrator",
                    rating: 4,
                    skillImg: ai
                }
            ]
        },
        // {
        //     title:  'Cloud Service',
        //     link:   'cloud',
        //     img:    cloudEgg,
        //     des:    'Basic Knowlege of popular cloud serivces provided by big companies',
        //     isActive: true,
        //     item:   [
        //         {
        //             skillName: "AWS Cloud Service",
        //             rating: 5,
        //             skillImg: aws
        //         }
        //     ]
        // },
        {
            title:  'Others',
            link:   'others',
            img:    othersEgg,
            des:    'Some other skills that  may or may not related to web development',
            isActive: true,
            // ref:    others,
            item:   [
                {
                    skillName: "WordPress",
                    rating: 3.5,
                    skillImg: wordpress
                },
                {
                    skillName: "Git",
                    rating: 3.5,
                    skillImg: git
                },
                {
                    skillName: "Github",
                    rating: 4,
                    skillImg: github
                }
            ]
        }
    ];
    

    const [openEgg, setopenEgg] = useState(false);
    const [currentSkill, setcurrentSkill] = useState(null);
    return (
        <>
            <section id="skills" className="skills">
                <div className="rectangle"></div>
                <div className="space"></div>
                <img src={crawl} alt="" className="crawl"/>

                <div className="codetag-cta">
                        <img src={openCodetag} alt="" className="codetag open"/>
                            <div className="section-header">
                                Milestone
                            </div>
                        <img src={closeCodetag} alt="" className="codetag close"/>
                        <img src={slashCodetag} alt="" className="codetag slash"/>
                </div>

                <div className="skills-container">
                    {SkillsList.map( (Skill) => {
                        const {title, link, des, img, isActive} = Skill;
                        if(isActive){
                            return (
                            <>
                                <div className="skill-container">
                                    <button className="egg-btn" onClick= {()=> {
                                        setopenEgg(true);
                                        setcurrentSkill(Skill);
                                    }}>
                                        <img src={img} alt="" className={link + " egg"}/>
                                    </button>
                                    <h4 className="skill-title " id={link}>
                                        {title}
                                    </h4>
                                    <span className="border"></span>
                                    <p className="skill-des">
                                        {des}
                                    </p>
                                </div>
                            </>
                            )
                        }
                    })
                    }
                </div>

                <Modal className="Modal" overlayClassName="Overlay"
                    isOpen = {openEgg}
                    onRequestClose={() => setopenEgg(false)}
                    closeTimeoutMS={200}
                >
                    <div className="skill-card">
                        <div className="skill-card-header">
                            <span className="skill-card-title">
                                {currentSkill ? currentSkill.title:null}
                            </span>
                        </div>
                        <div className="border"></div>
                        <div className="skill-content">
                            {
                                currentSkill ?
                                currentSkill.item.map((myitem) => {
                                  return (
                                    <>
                                        <div className="skill-details">
                                            <div className="skill-subject">
                                                <img className="skill-logo" src={myitem.skillImg} alt="" />
                                                <span className="skill-item-title">
                                                    {myitem.skillName}
                                                </span>     
                                            </div>
                                            <div className="rating-group">
                                                {
                                                    <Puzzle rating={myitem.rating} puzzle={puzzle}/>
                                                }
                                            </div>

                                        </div>
                                    </>
                                  )
                                }): null
                            }
                        </div>
                    </div>
                    <button className="close-btn"  onClick= {()=> {
                                        setopenEgg(false);
                    }}>
                                        <img src={close} alt="" className="close"/></button>
                    <button className="arrow-btn"><img src={arrow} alt="" className="arrow"/></button>
                </Modal>
                
            </section>
        </>
    )
}
