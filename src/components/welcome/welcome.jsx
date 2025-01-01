import React from 'react'
import useStore from '../../../store'
import { useLayoutEffect, useEffect } from 'react';
import { Html, Center } from '@react-three/drei';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import "./welcome.scss";
import { useScrollAnimation } from '../../Helper';
import { FaCogs } from "react-icons/fa";
import { typeText } from '../../Helper';

const Welcome = () => {
  const text =  `A comprehensive suite of APIs
   to help you build fintech products cost-effectively`

  const subheadlineElement = document.querySelector('.subheadline');

  useEffect(()=>{
      const tl = gsap.timeline({
                defaults: {
                    duration: 1,
                    ease: "power2" 
                }
      })

     tl.fromTo('.headline', {opacity:0, y:100}, {opacity:1, y:0}).fromTo('.subheadline', {opacity:0, y:100}, {opacity:1, y:0}, "-=0.9")
     .fromTo('.actions', {opacity:0, y:100}, {opacity:1, y:0}, "-=1")

  },[])


      


        return (
              <div className='welcome' >

                <div className="welcome_svg">
                  <img src={"./assets-images/arrow.png"} />
                </div>

                <div className="welcome_content">
                  <h1 className='headline'> A comprehensive suite of APIs <br/> to help you build fintech products cost-effectively</h1>
    
                  <div className="actions">
                    <button className='action_start'>START BUILDING</button>
                    <button className='action_docs'>VIEW DOCS</button>
                  </div>

                </div>
              </div>
        )
      }

export default Welcome