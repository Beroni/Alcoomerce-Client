import styled from 'styled-components';
import Title from "antd/es/typography/Title";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InternalContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 2.4em;
    align-items: center;
`;

export const PageTitle = styled(Title)`
    margin: 0 .4em;
`;