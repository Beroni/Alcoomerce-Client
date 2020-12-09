import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import Template from "../../components/template";
import {getOne} from "../../services/categories";
import {Breadcrumb, Col, Row, Skeleton} from "antd";
import {Container, Content, Image} from "../product/styles";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import {getList} from "../../services/products";
import Product from "../../components/product";


export default function Category() {
    const [category, setCategory] = useState({});
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const {id} = useParams();
    useEffect(() => {
        (async () => {
            let category = await getOne(id);
            await setCategory(category);
            setProducts(await getList({category_id: id}));
            setLoading(false);
        })()
    }, [])

    return (
        <Template>
            <Image src={category.image}/>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to="/">Inicio</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {category.name}
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Content>
                    {
                        loading ?
                            <Skeleton/> :
                            <>
                                <Title>
                                    {category.name}
                                </Title>
                                <Text>
                                    {category.description}
                                </Text>
                                <br/>
                                <br/>
                                <Row>
                                    <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                                        {
                                            products.map((product, i) =>
                                                <Col span={4}>
                                                    <Product id={12} {...product}/>
                                                </Col>
                                            )
                                        }
                                    </Row>
                                </Row>
                            </>
                    }
                </Content>
            </Container>
        </Template>
    )
}