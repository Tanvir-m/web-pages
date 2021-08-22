import styled from 'styled-components';

export const Button = styled.button`
    width: 400px;
    height: 50px;
    background-color: ${props=>props.dark ? "black": "white"};
    color: ${props=>props.dark ? "white": "black"};
    text-align: center;
    font-size: 20px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    border-radius: 3px;
    border: none;
    :hover{
        color: ${props=>props.dark ? "black": "white"};
        background-color: ${props=>props.dark ? "white": "black"};
        transition-duration: 1000ms;
    }
`