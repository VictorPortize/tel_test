import styled from 'styled-components';

const Button = styled.button`
    width: 80%;
    background-color: #999999;
    box-shadow: none;
    color: black;
    margin-top: 20px;
    align-self: center;
    display: block;
    font-size: 16px;
    font-weight: 600;
    padding: 8px;
    transition: 1s all;
    @media(min-width: 768px ){
        width: 50%;
    }
`;

export default Button