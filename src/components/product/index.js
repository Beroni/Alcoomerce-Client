import React from 'react';
import {Container, Image, Value} from "./styles";
import Meta from "antd/es/card/Meta";
import {Link} from "react-router-dom";

export default function Product({image, description, title, value, id}) {
    return (
        <Link to={`/product/${id}`}>
            <Container
                hoverable
                cover={<Image alt={title} src={image}/>}>
                <Meta title={title} description={description}/>
                <Value>
                    R$ {value.toFixed(2).toLocaleString()}
                </Value>
            </Container>
        </Link>
    )
}