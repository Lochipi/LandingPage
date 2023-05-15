import styled from "styled-components"

export const StyledHeader = styled.header`
    padding: 30px 5px;
    max-width: 100%;
    background-color: ${({ theme }) => theme.colors.header};
    color: black;

`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    @media (max-width: ${({ theme }) => theme.mobile}){
        flex-direction: column;
    };
`

export const Logo = styled.img`
   @media (max-width: ${({ theme }) => theme.mobile}){
       margin-bottom: 30px;
};
`