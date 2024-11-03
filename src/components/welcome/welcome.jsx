import React from 'react'
import useStore from '../../../store'
import { useLayoutEffect } from 'react';
import { Html, Center } from '@react-three/drei';
import "./welcome.scss";


const Welcome = ({tl}) => {


  return (
        <div className='welcome' >
            <h1 className='headline'>FINTEKKERS</h1>
            <h2 className='subheadline'>David Doherty</h2>
        </div>
  )
}

export default Welcome