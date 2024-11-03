
import './App.scss'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, ScrollControls, useScroll } from '@react-three/drei'
import { useLayoutEffect, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { useThree } from '@react-three/fiber'


// components imports
import Welcome from './components/welcome/welcome'
import UI from './components/UI/UI'


const App = ()=>{


  return  <div className='app-container' >
        <Canvas
          shadows
          gl={{ preserveDrawingBuffer: true }}
          camera={{
            fov: 25,
            near: 0.1,
            far: 100,
            position: [0, 0, 20],
          }}
        >
            <ScrollControls damping={0.5} pages={3}>
              <FINTEKKERS />
            </ScrollControls>
           
        </Canvas>

       </div>
  
}

const FINTEKKERS = () => {

  // responsiveness
    const { camera } = useThree();

    useEffect(() => {
        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, [camera]);

  // gsap animation settings
  const tl = useRef(null);
  const scroller = useScroll()
 
 

  useLayoutEffect(()=>{
   tl.current = gsap.timeline({
      defaults: { duration: 1, ease: "power1.inOut" }
  });
  },[])

   useFrame((_state, _delta) => {
    tl?.current.seek(scroller.offset * tl?.current.duration());
  });


  return (
    <Html>
       <Welcome tl={tl?.current} />
       <UI />
    </Html>
  )
}

export default App
