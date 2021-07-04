import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;  

export const ClickText = styled.span`
    color: #999999;
    margin-top: 20px;
`;

export const Linking = styled(Link)`
    color: white;
    text-decoration: none;
`;