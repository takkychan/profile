//libraries
import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import {useSpring, animated, interpolate} from 'react-spring';
// import {Spring} from 'react-spring/renderprops';
// import lax from 'lax.js';
import { useLaxElement, useLax } from 'use-lax';
// import { motion } from "framer-motion"
//components
import Puzzle from './Puzzle.jsx';
//css
import './style/Skills.scss';
//images
import stampBlue from '../img/Stamp.svg';
import stampCream from '../img/Stamp-cream.svg';
import cloud from '../img/cloud.svg';
import openCodetag from '../img/open-codetag.png';
import closeCodetag from '../img/close-codetag.png';
import slashCodetag from '../img/slash-codetag.png';
import crawl from '../img/Crawl.svg';
import basicEgg from '../img/basic-egg.png';
import frontendEgg from '../img/frontend-egg.png';
import backendEgg from '../img/backend-egg.png';
import cloudEgg from '../img/cloud-egg.png';
import graphicEgg from '../img/graphic-egg.png';
import othersEgg from '../img/others-egg.png';
//puzzle
import puzzle from '../img/skillItem/puzzle.svg';
//basic
import google from '../img/skillItem/google.svg';
import html from '../img/skillItem/html.svg';
import css from '../img/skillItem/css.svg';
import sass from '../img/skillItem/sass.svg';
//frontend
import react from '../img/skillItem/react.svg';
import bootstrap from '../img/skillItem/bootstrap.svg';
import redux from '../img/skillItem/redux.svg';
import mui from '../img/skillItem/mui.svg';
import nextjs from '../img/skillItem/nextjs.svg';
//backend
import nodejs from '../img/skillItem/nodejs.svg';
import nestjs from '../img/skillItem/nestjs.svg';
import graphql from '../img/skillItem/graphql.svg';
import php from '../img/skillItem/php.svg';
import mongo from '../img/skillItem/mongo.svg';
import mysql from '../img/skillItem/mysql.svg';
//cloud
import aws from '../img/skillItem/aws.svg';
//graphic
import figma from '../img/skillItem/figma.svg';
import ps from '../img/skillItem/ps.svg';
import xd from '../img/skillItem/xd.svg';
import pr from '../img/skillItem/pr.svg';
import ai from '../img/skillItem/ai.svg';
//others
import git from '../img/skillItem/git.svg';
import github from '../img/skillItem/github.svg';
import wordpress from '../img/skillItem/wordpress.svg';
//formodal
import close from '../img/close.svg';
//Dark
import cloudDark from '../img/cloud-dark.svg';
import openCodetagDark from '../img/open-codetag-dark.png';
import closeCodetagDark from '../img/close-codetag-dark.png';
import slashCodetagDark from '../img/slash-codetag-dark.png';

gsap.registerPlugin(ScrollTrigger);

var progress = 0;
ScrollTrigger.addEventListener('refreshInit', function () {
  progress =
    document.documentElement.scrollTop / ScrollTrigger.maxScroll(window);
});
ScrollTrigger.addEventListener('refresh', function () {
  document.documentElement.scrollTop =
    progress * ScrollTrigger.maxScroll(window);
});

export default function Skills(props) {
  const { theme } = props;
  const basic = useRef(null);
  const frontend = useRef(null);
  const backend = useRef(null);
  const graphic = useRef(null);
  const others = useRef(null);
  const mySkills = useRef(null);

  //GSAP

  useEffect(() => {
    gsap.from(mySkills.current, {
      scrollTrigger: {
        trigger: mySkills.current,
        toggleActions: 'restart none none reverse',
        start: 'center bottom',
      },
      y: 50,
      x: 20,
      opacity: 0,
      duration: 0.5,
      pin: true,
      ease: 'easeInOut',
    });

    SkillsList.forEach((Skill) => {
      const { ref } = Skill;
      gsap.from(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          toggleActions: 'restart none none reverse',
        },
        y: 50,
        x: 20,
        opacity: 0,
        duration: 0.5,
        scale: 0.3,
        pin: true,
        ease: 'easeInOut',
      });
    });
  }, []);

  const SkillsList = [
    {
      title: 'Web Basic',
      link: 'basic',
      img: basicEgg,
      des: 'Basic knowledge and fundamentals for modern web development',
      isActive: true,
      ref: basic,
      item: [
        {
          skillName: 'Google Search',
          rating: 5,
          skillImg: google,
        },
        {
          skillName: 'HTML',
          rating: 4,
          skillImg: html,
        },
        {
          skillName: 'CSS',
          rating: 4,
          skillImg: css,
        },
        {
          skillName: 'SASS',
          rating: 4,
          skillImg: sass,
        },
      ],
    },
    {
      title: 'Front-end skills',
      link: 'frontend',
      img: frontendEgg,
      des: 'Frameworks and knowledges that realated to the UI/UX, providing smooth and stylish web experience',
      isActive: true,
      ref: frontend,
      item: [
        {
          skillName: 'ReactJs',
          rating: 4,
          skillImg: react,
        },
        {
          skillName: 'NextJs',
          rating: 4.5,
          skillImg: nextjs,
        },
        {
          skillName: 'Redux',
          rating: 4,
          skillImg: redux,
        },
        {
          skillName: 'MaterialUI',
          rating: 4,
          skillImg: mui,
        },
        {
          skillName: 'Bootstrap',
          rating: 4,
          skillImg: bootstrap,
        },
      ],
    },
    {
      title: 'Back-end skills',
      link: 'backend',
      img: backendEgg,
      des: 'Knowledge of handling functionality, data, security and performance.',
      isActive: true,
      ref: backend,
      item: [
        {
          skillName: 'NodeJS',
          rating: 4,
          skillImg: nodejs,
        },
        {
          skillName: 'NestJS',
          rating: 4,
          skillImg: nestjs,
        },
        {
          skillName: 'MongoDB',
          rating: 4,
          skillImg: mongo,
        },
        {
          skillName: 'GraphQL',
          rating: 4,
          skillImg: graphql,
        },
        {
          skillName: 'PHP',
          rating: 3,
          skillImg: php,
        },
        {
          skillName: 'Mysql',
          rating: 3,
          skillImg: mysql,
        },
      ],
    },
    {
      title: 'Graphic Skills',
      link: 'graphic',
      img: graphicEgg,
      des: 'Experience of graphical edits and creation.',
      isActive: true,
      ref: graphic,
      item: [
        {
          skillName: 'Adobe XD',
          rating: 4,
          skillImg: xd,
        },
        {
          skillName: 'Figma',
          rating: 4,
          skillImg: figma,
        },
        {
          skillName: 'Adobe Photoshop',
          rating: 4,
          skillImg: ps,
        },
        {
          skillName: 'Adobe Premeire Pro',
          rating: 5,
          skillImg: pr,
        },
        {
          skillName: 'Adobe Illustrator',
          rating: 4,
          skillImg: ai,
        },
      ],
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
      title: 'Others',
      link: 'others',
      img: othersEgg,
      des: 'Some other skills that  may or may not related to web development',
      isActive: true,
      ref: others,
      item: [
        {
          skillName: 'WordPress',
          rating: 3.5,
          skillImg: wordpress,
        },
        {
          skillName: 'Git',
          rating: 3.5,
          skillImg: git,
        },
      ],
    },
  ];

  const [openEgg, setopenEgg] = useState(false);
  const [currentSkill, setcurrentSkill] = useState(null);
  return (
    <>
      <section id="skills" className="skills">
        <div className="rectangle"></div>
        <div className="space"></div>
        <img src={crawl} alt="" className="crawl" />

        <div className="codetag-cta" ref={mySkills}>
          <img
            src={theme == 'light' ? openCodetag : openCodetagDark}
            alt=""
            className="codetag open"
          />
          <div className="section-header">My Skills</div>
          <img
            src={theme == 'light' ? closeCodetag : closeCodetagDark}
            alt=""
            className="codetag close"
          />
          <img
            src={theme == 'light' ? slashCodetag : slashCodetagDark}
            alt=""
            className="codetag slash"
          />
        </div>

        <div className="skills-container">
          {SkillsList.map((Skill) => {
            const { title, link, des, img, ref, isActive } = Skill;
            if (isActive) {
              return (
                <>
                  <div className="skill-container" ref={ref}>
                    <button
                      className="egg-btn"
                      onClick={() => {
                        document.body.style.overflow = 'hidden';
                        setopenEgg(true);
                        setcurrentSkill(Skill);
                      }}
                    >
                      <img src={img} alt="" className={link + ' egg'} />
                    </button>
                    <h4 className="skill-title " id={link}>
                      {title}
                    </h4>
                    <span className="border"></span>
                    <p className="skill-des">{des}</p>
                  </div>
                </>
              );
            }
          })}
        </div>

        <Modal
          className="Modal"
          overlayClassName="Overlay"
          //  style={theme == 'light' ? {content:{backgroundColor: 'white', boxShadow: "0px 3px 30px  var(--shadow)"}} : {content:{backgroundColor: '#313233', color: "white", boxShadow: "0px 3px 30px  var(--shadow)"}}}
          isOpen={openEgg}
          onRequestClose={() => {
            setopenEgg(false);
            document.body.style.overflow = 'unset';
          }}
          closeTimeoutMS={200}
        >
          <div className="skill-card">
            <div className="skill-card-header">
              <span className="skill-card-title">
                {currentSkill ? currentSkill.title : null}
              </span>
            </div>
            <div className="border"></div>
            <div className="skill-content">
              {currentSkill
                ? currentSkill.item.map((myitem) => {
                    return (
                      <>
                        <div className="skill-details">
                          <div className="skill-subject">
                            <img
                              className="skill-logo"
                              src={myitem.skillImg}
                              alt=""
                            />
                            <span className="skill-item-title">
                              {myitem.skillName}
                            </span>
                          </div>
                          <div className="rating-group">
                            {<Puzzle rating={myitem.rating} puzzle={puzzle} />}
                          </div>
                        </div>
                      </>
                    );
                  })
                : null}
            </div>
          </div>
          <button
            className="close-btn"
            onClick={() => {
              setopenEgg(false);
              document.body.style.overflow = 'unset';
            }}
          >
            <img src={close} alt="" className="close" />
          </button>
        </Modal>
      </section>
    </>
  );
}
