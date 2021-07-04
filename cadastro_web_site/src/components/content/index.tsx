import styled from 'styled-components';

const Content = styled.div`
    display: block;
    border: 0.1px solid #999999;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    width: 30%;
    padding: 30px;
    @media(max-width: 630px){
        width: 70%;
    }
`;

export default Content