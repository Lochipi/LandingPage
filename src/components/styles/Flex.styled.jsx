import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;

    & > div,
    & > ul {
        flex: 1;
    }

    h1 {
        color: green;
        padding: 0 0 10px 0;
    }

    p {
        padding: 10px 0;
    }

    @media (max-width: ${({theme}) => theme.mobile}){
        flex-direction: column;
        text-align: center;
    };
`