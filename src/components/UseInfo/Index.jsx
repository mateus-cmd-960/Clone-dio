
import {Container, Progress, UsePicture, NameText} from './styles'
const UserInfo = ({nome, image})=>{
    return(
        <Container>
            <UsePicture src={image}/>
            <div>
            <NameText>Mateus Abel</NameText>
            <Progress />
            </div>
        </Container>
    )
}

export default UserInfo