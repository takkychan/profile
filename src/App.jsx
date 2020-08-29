//libraries
import React, {useState, useEffect} from 'react'
  // import {useSpring, animated, interpolate} from 'react-spring';
  // import {Spring} from 'react-spring/renderprops';
  // import lax from 'lax.js';
  // import {useLaxElement, useLax, updateLaxElement}  from './use-lax'
  // import { motion } from "framer-motion"
//components
// import Landing from './landing/Landing'
 import Home from './home/Home'
import Milestone from './milstone/Milestone'
import Skills from './skills/Skills'
import Footer from './footer/Footer'
// import { ThemeProvider } from './ThemeContext'
//css
import './App.scss'
import Milstone from './milstone/Milestone.jsx'
//images

function App() {
   const [theme, setTheme] = useState('light')

  return (
      <main className={theme}>
        <a className="goTop" href="#home" ><i class="fas fa-angle-up"></i></a>
        <button className="themeSwitch" onClick={()=>{
          theme == 'light' ? setTheme('dark'): setTheme('light')
        }}>
          {theme == 'light' ? <i class="fas fa-moon"></i> : <i class="fas fa-sun"></i> }
        </button>

        <Home theme = {theme} />
        <Milestone  theme = {theme} />
        <Skills theme = {theme} />
        <Footer theme = {theme}/>
      </main>

  );
}

export default App;
