import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Avatar, Button, Divider, List} from "antd";
import {Link} from "react-router-dom";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import {addAnother, slice} from "../../actions/cart";
import {ResumeContainer} from "./styles";

export default function CartItems({setStep}) {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        setStep(0)
    }, []);

    function Add(productId) {
        dispatch(addAnother(productId))
    }

    function Remove(productId) {
        dispatch(slice(productId))
    }

    let resume = cart.reduce(({valueACC, quantityInCartAcc}, {value, quantityInCart}) => ({
        valueACC: valueACC + value,
        quantityInCart: quantityInCart + quantityInCartAcc
    }));

    return (
        <>
            <div style={{margin: "2em 0"}}>
                <Title>Items</Title>
                <List
                    itemLayout={'horizontal'}
                    dataSource={cart}
                    size={'large'}
                    renderItem={product => (
                        <List.Item
                            extra={
                                <Text>R$ {(product.value * product.quantityInCart).toFixed(2).replace('.', ',')}</Text>}
                            actions={[
                                <Button type={"danger"} onClick={() => Remove(product.id)}>-</Button>,
                                <Text>{product.quantityInCart}</Text>,
                                <Button type={"primary"} onClick={() => Add(product.id)}>+</Button>
                            ]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={product.image}/>}
                                title={<Link to={`/product/${product.id}`}>{product.name}</Link>}
                                description={product.description.length > 100 ? product.description.substr(0, 95) + '...' : product}
                            />
                        </List.Item>
                    )}
                >
                </List>
            </div>
            <Divider/>
            <ResumeContainer>
                <div>
                    <Title level={4}>Total</Title>
                    R$ {(resume.quantityInCart * resume.value).toFixed(2).replace('.', ',')}
                </div>
                <Button type={'primary'}>
                    <Link to={'/cart/buy'}>
                        Proximo
                    </Link>
                </Button>
            </ResumeContainer>
        </>
    )
}