import React from "react"
import {Container, InternalContainer, PageTitle} from "./styles";
import Title from "antd/es/typography/Title";

export default function NotFound() {
    return (
        <Container>
            <InternalContainer>
                <PageTitle>
                    404
                </PageTitle>
            </InternalContainer>
            <Title level={4}>
                EEEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIIIIIIIIIIIIII eu to perdido, eu
            </Title>
        </Container>
    )
}