import styled from 'styled-components';
import {Card} from "antd";
import Meta from "antd/es/card/Meta";

export const Container = styled(Card)`
    display: flex;
    flex-direction: column;
    height: 500px;
    border-radius: 10px;  
`;

export const Image = styled.div`
    width: 100%;
    height: 300px;
    background-image: url("${props => props.src}");
    background-size: cover;
    border-radius: 10px 10px 0 0;
`;

export const Value = styled.span`
    margin-top: 1em;
    font-size: 1.4em;
    float: right;
`;

export const MetaCustom = styled(Meta)`
  height: 100px;
`;