import styled from "styled-components";

export const StyledIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    a{
        border: 1px solid #fff;
        border-radius: 50%;
        color: #fff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        height: 40px;
        width: 40px;
        text-decoration: none;
        transition: 3s all ease-in-out; 
    }

    li{
        list-style-type: none;
        margin-top: 1em;
    }

    & > li :hover{
        transform: scale(1.03);
    }

    @media (max-width: ${({theme}) => theme.mobile}){
        flex-direction: row;
        margin-bottom: 1em;
    };
`