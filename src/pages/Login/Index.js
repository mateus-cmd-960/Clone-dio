import Button from "../../components/Button/Index";
import {MdEmail, MdLock} from 'react-icons/md'

import Header from "../../components/Header/Index";
import Input from '../../components/Input/Index';


import {Column, Row, Container, EsqueciText,
   CriarText, Title, SubTitleLogin, TitleLogin, Wrapper} 
   from './styles';
   import { useNavigate } from "react-router-dom";





const Login = ()=> {
  const navigate= useNavigate()
  const handleClickSignin=()=>{
    navigate('/feed')
  }


  return(
    <>
    <Header/>
    <Container>

      <Column>
      <Title>
      A plataforma para você aprender 
      com especialistas, dominar as principais tecnologias 
      e entrar mais rápido nas empresas mais desejadas.
      </Title>
      </Column>
      <Column>
      <Wrapper>
        <TitleLogin>Faca seu cadastro</TitleLogin>
        <SubTitleLogin>Faca seu login e make the change</SubTitleLogin>
        <form>
          
          <Input name="email" placeholder="email"   leftIcon={<MdEmail/>}/>
          <Input  name="password" placeholder="senha" type='password' leftIcon={<MdLock/>} />
          <Button title='entrar' primary='secondary' onClick={handleClickSignin}/>

          <Row>
          <EsqueciText>esqueci minha senha</EsqueciText>
          <CriarText>Criar conta</CriarText>
        </Row>
        </form>
        
        </Wrapper>
      </Column>

     
    </Container>

    
    </>
  )
}


export default Login;