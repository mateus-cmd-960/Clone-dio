import React from 'react'
import { ButtonContainer } from './styles'

const Button = ({title, onClick, primary})=>{

  return(
    <ButtonContainer onClick={onClick} primary={primary}>
        {title}
    </ButtonContainer>
  )

}

export default Button