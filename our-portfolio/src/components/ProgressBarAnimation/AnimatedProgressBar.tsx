import React, { useState, useEffect } from "react"
import {Animate} from 'react-move'

interface Animator {
    children: any,
    start: number
    end: number,
    duration: number;
    easingFunction: (arg0: number) => number;
}

export const AnimatedProgressProvider: React.FC<Animator> = (props) => {
    // let interval = undefined;
    const [isAnimated, setAnimate] = useState(false)

    useEffect(() => {
        if(!isAnimated){
            setAnimate(true)
        }
    }, [isAnimated]);

    return (
        <Animate
        start={() => ({
          value: props.start
        })}
        update={() => ({
          value: [
            isAnimated ? props.end : props.start
          ],
          timing: {
            duration: props.duration * 1000,
            ease: props.easingFunction
          }
        })}
      >
        {({ value }) => props.children(value)}
      </Animate>
    )
} 