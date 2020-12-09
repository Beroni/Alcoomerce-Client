import React, {useState, useEffect} from "react";
import Template from "../../components/template";
import {Container, Content, Image, Price} from './styles'
import {Breadcrumb, Button, Card, Col, Divider, Row, Skeleton} from "antd";
import {Link} from "react-router-dom";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import Meta from "antd/es/card/Meta";
import lerolero from "lerolero";
import {CheckOutlined, StarOutlined} from "@ant-design/icons";
import {useParams} from "react-router-dom";
import * as productService from "../../services/products";
import {getOne} from "../../services/categories";
import {useDispatch} from "react-redux";
import {add} from "../../actions/cart";

const rating = new Array(6).fill(null).map((_, i) =>
    <Col span={4}>
        <Card
            key={i}
            hoverable
            style={{width: 240}}
            cover={<img
                src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${Math.floor(Math.random() * 100)}.jpg`}/>}
        >
            <Meta title={<>
                Avaliador
                <br/>
                {new Array(Math.floor(Math.random() * 2) + 4).fill(null).map((_, i) =>
                    <StarOutlined
                        key={i}/>)}
            </>} description={lerolero()}/>
        </Card>
    </Col>
);

export function Product() {
    const [product, setProduct] = useState({});
    const [category, setCategory] = useState({});
    const [loading, setLoading] = useState(true);
    const [waitAdd, setWaitAdd] = useState(false);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        (async () => {
            let product = await productService.getOne(id)
            await setProduct(product)
            let category = await getOne(product.category_id)
            await setCategory(category)
            setLoading(false)
        })()
    }, [])

    function addItem() {
        setWaitAdd(true)
        product.quantityInCart = 1;
        dispatch(add(product))
        setTimeout(() => {
            setWaitAdd(false)
        }, 200)
    }

    return (
        <Template>
            <Image src={product.image}/>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to="/">Inicio</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {category.name && <Link to={"/category/" + category.name.toLowerCase()}>{category.name}</Link>}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {product.name}
                    </Breadcrumb.Item>
                </Breadcrumb>
                <br/>
                <Content>
                    {loading ? <Skeleton/> :
                        <>
                            <Title>{product.name}</Title>
                            <Text>{product.description}</Text>
                            <br/>
                            <Price>
                                R$ {product.value.toFixed(2).replace('.', ',')}
                            </Price>
                            <Button onClick={addItem} icon={waitAdd && <CheckOutlined/>}
                                    type={waitAdd ? "secondary" : "primary"}>
                                Adicionar no carrinho
                            </Button>
                            <br/>
                            <Divider/>
                            <Title level={2}>Experiencias</Title>
                            <Row>
                                {rating}
                            </Row>
                        </>}
                </Content>
            </Container>
        </Template>
    )
}
