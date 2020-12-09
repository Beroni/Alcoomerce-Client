import React, {useState} from 'react';
import Template from "../../components/template";
import {useSelector} from "react-redux";
import {Steps} from "antd";
import {Content} from "../product/styles";
import {
    Switch,
    Route,
} from "react-router-dom";
import BuyForm from "../../components/buyForm";
import CartItems from "../../components/cartItems";

export default function Cart() {
    const cart = useSelector(state => state.cart);
    const [step, setStep] = useState(0);

    return (
        <Template>
            <Content>
                <br/><br/><br/><br/><br/><br/>
                <Steps current={step}>
                    <Steps.Step title="Items" description="Escolha seus produtos"/>
                    <Steps.Step title="Dados do Comprador" description="Endereco e dados de pagamento"/>
                    <Steps.Step title="Compra concluida" description="Compra realizada com sucesso"/>
                </Steps>
                <br/><br/>
                <Switch>
                    <Route exact path={"/cart"}>
                        <CartItems setStep={setStep}/>
                    </Route>
                    <Route exact path={'/cart/buy'}>
                        <BuyForm setStep={setStep}/>
                    </Route>
                </Switch>
            </Content>
        </Template>
    )
}