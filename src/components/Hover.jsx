import React from 'react'
import { useRef } from 'react'
import useHover from './hooks/useHover'

const Hover = () => {
    const ref = useRef()
    const isHovering = useHover(ref)
    console.log(isHovering)

  return (
    <div ref={ref} style={{width: 300, height: 50, background: isHovering ? "red" : "grey"}}>

        <button onClick={()=> console.log(ref.current) }>click</button>
    </div>
  )
}

export default Hover