import React, { useEffect, useState, ReactNode } from 'react'

interface ChangingProgressProps {
    values: number[]
    children: any
}


export const ChangingProgressProvider : React.FC<ChangingProgressProps> = (props) => {
    const interval = 1000;
    const [value,setValue] = useState(0) // These two values are the state variable and the function to change the variable.
    
    useEffect(() => {
        setValue((value + 1) % props.values.length)
    },[interval, value, props.values.length])

    return (
        props.children(props.values[value])
    )
}