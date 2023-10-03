import styled from "styled-components";

export const NumberscrollStyled = styled.div`
    height: 100vh;
    display:flex;
    align-items:  center;
    justify-content: center;
    background-color: #ddd;
    user-select: none;

    ul li {
        list-style: none;
    }

    div{
        width: 50px;
    }
    
`

type lightType = {
    y: number
} 

export const LightStyled = styled.div<lightType>`

    .light{
        width: 24px;
        height: 32px;
        line-height:32px;
        font-size: 24px;
        background-color: black;
        border-radius: 6px;
        overflow: hidden;

        .lightList{
            color: white;
            transform: translate(5px, ${props => props.y * 32}px);
            padding-left: 0;
            margin: 0;
            transition: transform 300ms;
        }
    }
`