import React from 'react'
import { TextProps } from '../../models'
import { colorClasses, sizeClasses } from '../../utils'

const Text:React.FC<TextProps> = ({color,fontSize,text}) => {
  const ApplyTextClass = ()=>{
    return `${colorClasses[color]} ${sizeClasses[fontSize]}`
  }
  return ( 
    <h1 className={ `${ApplyTextClass()} mt-1`}>{text}</h1>
  )
}

export default Text
