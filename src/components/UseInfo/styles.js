import styled from "styled-components";

export const Container=styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
`

export const UsePicture=styled.div`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #ffffff;
    margin-right: 12px;
` 

export const NameText=styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    
    color: white;
`
export const Progress= styled.div`
    width: 180px;
    height: 6px;
    background-color: #ffffff;
    border-radius: 3px;
    position: relative;

    &::after{
        content:'';
        position: absolute;
        left: 0;
        top: 0;
        width:35%;
        height: 6px;
        border-radius: 3px;
        background-color:#23dd7a;
    }

`