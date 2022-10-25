
import { UserInfo, HasInfo, UserPicture, PostInfo, 
    Content, ImageBackground, CardContainer } from "./styles";

    import {AiFillLike} from 'react-icons/ai';

const Card =()=>{
    return(
        <CardContainer>
            <ImageBackground/>
           <Content>
            <UserInfo>
                <UserPicture/>
                <div>
                <h4>Mateus Abel</h4>
                <p>8min</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projecto para o curso de html e css</h4>
                <p>projecto feito o curso de html e css no bootcamp.... <strong>saiba mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>Html #css #javascript</h4>
                <p><AiFillLike/>10</p> 
            </HasInfo>
           </Content>

        </CardContainer>
    )
}
export default Card