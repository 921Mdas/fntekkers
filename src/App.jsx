import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Welcome from './components/welcome/welcome';
import UI from './components/UI/UI';
import Problem from './components/PageOne/Problem';
import Services from './components/PageTwo/Services';
import Revenue from './components/PageThree/Revenue';
import ThinkBig from './components/PageFour/ThinkBig';
import Headcount from './components/PageFive/Headcount';
import './App.scss'; // Make sure to style as needed


const App = () => {

  return (
    <div className='project_container'>
     <UI />
     <Welcome />
     <Problem />
     <Services />
     <Revenue /> 
     <ThinkBig />
     <Headcount />
    </div>
  );
};

export default App;
