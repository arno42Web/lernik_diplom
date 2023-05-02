import styled from "styled-components";

export const NavbarContainer = styled.div`
    position:fixed;
    top:5%;
    left:10%;
    z-index:10;
    transition: all 0.3s ease-in;
    padding: 0px 10px;
    border-radius:50px;
    background-color: ${({bgColor})=> bgColor};

`

export const Logo = styled.p`
    font-size: 1.7rem;
    font-weight: ${({theme}) => theme.fonts.weight.medium};
    color:white;


`