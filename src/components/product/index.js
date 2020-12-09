import React from 'react';
import {Container, Image, MetaCustom, Value} from "./styles";
import {Link} from "react-router-dom";

export default function Product({url, description, name, price, id}) {
    return (
        <Link to={`/product/${id}`}>
            <Container
                hoverable
                cover={<Image alt={name} src={url}/>}>
                <MetaCustom title={name} description={description.length > 100 ? description.substr(0, 95) + '...' : description}/>
                <Value>
                    R$ {price.toFixed(2).toLocaleString()}
                </Value>
            </Container>
        </Link>
    )
}