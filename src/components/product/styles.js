import styled from 'styled-components';
import {Card} from "antd";

export const Container = styled(Card)`
    display: flex;
    flex-direction: column;
`;

export const Image = styled.img`
    width: 100%;
`;

export const Value = styled.span`
    margin-top: 1em;
    font-size: 1.4em;
    float: right;
`;