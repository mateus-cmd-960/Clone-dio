import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
    
  background-color: #565656;
  border-radius: 22px;
  position: relative;
  color: #fff;
  min-width: 120px;
  width: 100%;
  padding: 2px 12px;

  ${props=>props.primary && css`

    min-width: 160px;
    background-color: #e41050;
    height: 33px;

    &: hover{
      opacity: 0.6;
      cursor: pointer;
    }

    &::after{
        content:'';
        position: absolute;
        border: 1px solid #e41050;
        left: -6px;
        top: -5px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;

    }
  `

  

  }




    
`