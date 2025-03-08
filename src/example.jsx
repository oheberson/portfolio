import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const randomGSAP = gsap.utils.random(-200, 200, 1, true)

function App() {
  /* const circle = useRef() //using ref
  const circle2 = useRef()
  const circle3 = useRef() */

  // SIMPLE ANIMATION ON RENDER USING GSAP HOOK

  /* useGSAP(() => {
    gsap.to(circle.current, {
      rotation: "+=360",
      duration: 3,
      repeat: -1,
      ease: "none"
    })
  }, []) */

  // ANIMATION REACTING TO PROPS

  /* useGSAP(() => {
    gsap.to(circle2.current, {
      x: randomX,
      duration: 1
    })
  }, [randomX]) */

  // CONTEXT SAFE TRIGGER ANIMATION ON CLICK

  /* const { contextSafe } = useGSAP();

  const onClickGood = contextSafe(() => {
    gsap.to(circle3.current, {rotation: "+=360"})
  }) */

  return (
    <>
      <div className='nested'>
        {/* EX.1  */}
        {/* <div className='box gradient-green'>
          Selector
        </div>
        <div ref={circle} className='circle gradient-blue'>
          Ref
        </div> */}

        {/* EX.2  */}
        {/* <button style={{ width: '150px'}} onClick={() => setRandomX(randomGSAP())}>
          Click me 
        </button>
        <div className='circle gradient-blue' ref={circle2}>
          {randomX}
        </div> */}

        {/* EX.3  */}
        {/* <button style={{ width: '150px'}} onClick={() => onClickGood()}>
          Click me 
        </button>
        <div className='circle gradient-blue' ref={circle3}>
          box
        </div>  */}
        {/* --------------------------  */}        

      </div>
    </>
  )
}

export default App
