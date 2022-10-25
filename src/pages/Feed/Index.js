import Button from "../../components/Button/Index";
import Header from "../../components/Header/Index";
import {Container, Title, TitleHighlight, TextContent, Column} from './styles'
import Banner from '../../assets/banner-home.png';
import Card from "../../components/Card/Index";
import UserInfo from "../../components/UseInfo/Index";





const Feed = ()=> {
  return(
    <>
    <Header autenticado={true}/>
    <Container>
      <Column >
        <Title>Feed</Title>
      <Card/>
      
      </Column>
      <Column>
        <TitleHighlight># Ranking 5 top da semana</TitleHighlight>
      <UserInfo nome='Mateus Abel' />
      <UserInfo nome='Mateus Abel' />
      <UserInfo nome='Mateus Abel' />
      <UserInfo nome='Mateus Abel' />
      <UserInfo nome='Mateus Abel' />
      </Column>
    
    </Container>

   
    
    </>
  )
}


export default Feed ;

