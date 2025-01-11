import React from 'react'
import { ButtonProps } from '../../models'

const Button:React.FC<ButtonProps> = ({title,type,onSubmit}) => {
  return (
    <div>
      <button onClick={onSubmit} className={`px-10 py-3 ${type ==='light' ? 'bg-white text-black' :'bg-black text-white'} rounded-sm shadow-md leading-3`} type='submit'>{title}</button>
    </div>
  )
}

export default Button
