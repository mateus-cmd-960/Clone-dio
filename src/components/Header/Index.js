import{BuscarInputContainer,
    Container,
    Row,
    Column,
    Wrapper, Menu, MenuRight, Input, userPicture
} from'./styles'

import Button from '../Button/Index'
import logo from '../../assets/logo.jpg'
import { UsePicture } from '../UseInfo/styles'
import { useNavigate } from 'react-router-dom'

const Header = ({autenticado})=>{
    const navigate= useNavigate()

    const handleClickSignin=()=>{
        navigate('/login')
    }

    const handleClickHome =()=>{
        navigate('/')
    }
    return(
        <Wrapper>
            <Container>
                <Row>
                  <button onClick={handleClickHome}><img src={logo} alt='logo da dio' width={35} height='35'/></button> 
                   {autenticado? (
                    <> <BuscarInputContainer>
                     <Input placeholder='buscar...'/>
                    </BuscarInputContainer>
                    <Menu >Live code</Menu>
                    <Menu>Global</Menu>
                </>

                   ): null}
                  
                </Row>

                <Row>
                    {autenticado ? (<UsePicture/>):(<>
                        <MenuRight href='/'>Home</MenuRight>
                        <Button title='entrar' onClick={handleClickSignin}></Button>
                     <Button title='cadastrar'></Button></>
                    
                    )}
                    
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Header