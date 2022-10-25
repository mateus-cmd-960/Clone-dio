
import {InputContainer, TextInput, IconContainer} from './styles'


const Input =({leftIcon, name, ...rest})=>{
  return(
    
      <InputContainer>
      {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>):null}
      
      <TextInput {...rest}/>
      
      
      </InputContainer>
   
  )
}
export default Input