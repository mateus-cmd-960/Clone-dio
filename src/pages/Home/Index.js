import Button from "../../components/Button/Index";
import Header from "../../components/Header/Index";
import {Container, Title, TitleHighlight, TextContent} from './styles'
import Banner from '../../assets/banner-home.png';





const Home = ()=> {
  return(
    <>
    <Header/>
    <Container>

      <div>
        <Title>
          <TitleHighlight>
            Implemente <br/>
          </TitleHighlight>
          o seu futuro
        </Title>
        <TextContent>
        Domine as tecnologias utilizadas pelas empresas mais inovadoras
         do mundo e enfrente seu novo desafio profissional, evoluindo em comunidade com os melhores especialistas.
        </TextContent>
        <Button title='Comece agora' primary='secondary'></Button>
        
      </div>

      <div>
       <img src={Banner} alt='banner' width='85%' height='85%'/>
      </div>
    </Container>

   
    
    </>
  )
}


export default Home ;

