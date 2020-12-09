import React, {useEffect} from 'react'
import {Button, Col, Divider, Form, Input, InputNumber, Row, Space} from "antd";
import Title from "antd/es/typography/Title";
import './styles.css'
import {Link} from "react-router-dom";

export default function BuyForm({setStep}) {

    useEffect(() => {
        setStep(1)
    }, []);

    function Submit(values){
        console.log(values)
    }

    return (
        <Form onFinish={Submit}>
            <Row>
                <Col span={8}>
                    <Space direction={'vertical'} className={'buyFormCol'}>
                        <Title level={2}>Seus Dados</Title>
                        <Form.Item
                            label={'Nome completo'}
                            name={'name'}
                            rules={[{required: true, message: 'Voce precisa colocar seu nome'}]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label={'Senha'}
                            name={'password'}
                            rules={[{required: true, message: 'Voce precisa colocar sua senha'}]}
                        >
                            <Input type={'password'}/>
                        </Form.Item>
                        <Form.Item
                            label={'CPF'}
                            name={'cpf'}
                            rules={[{required: true, message: 'Voce precisa colocar seu cpf'}]}
                        >
                            <Input/>
                        </Form.Item>
                    </Space>
                </Col>
                <Col span={8}>
                    <Title level={2}>Endereço</Title>
                    <Space direction={'vertical'} className={'buyFormCol'}>
                        <Form.Item
                            label={'Endereco'}
                            name={'address'}
                            rules={[{required: true, message: 'Voce precisa colocar seu endereco'}]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label={'Rua'}
                            name={'street'}
                            rules={[{required: true, message: 'Voce precisa colocar sua rua'}]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label={'Numero'}
                            name={'number'}
                            rules={[{required: true, message: 'Voce precisa colocar o numero'}]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label={'Complemento'}
                            name={'complement'}
                            rules={[{required: true, message: 'Voce precisa colocar o complemento'}]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label={'Cidade'}
                            name={'city'}
                            rules={[{required: true, message: 'Voce precisa colocar o cidade'}]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label={'CEP'}
                            name={'zipcode'}
                            rules={[{required: true, message: 'Voce precisa colocar o cep'}]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label={'Estado'}
                            name={'state'}
                            rules={[{required: true, message: 'Voce precisa colocar seu estado'}]}
                        >
                            <Input/>
                        </Form.Item>
                    </Space>
                </Col>
                <Col span={8}>
                    <Title level={2}>Pagamento</Title>
                    <Space direction={'vertical'} className={'buyFormCol'}>
                        <Form.Item
                            label={'Cartao de credito'}
                            name={'creditCard'}
                            rules={[{required: true, message: 'Voce precisa colocar seu cartao'}]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label={'CVC'}
                            name={'cvc'}
                            rules={[{required: true, message: 'Voce deve digitar o codigo de serguranca'}]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label={'Validade'}
                            name={'validDate'}
                            rules={[{required: true, message: 'Voce deve digitar a data de validade'}]}
                        >
                            <Input/>
                        </Form.Item>
                    </Space>
                </Col>
            </Row>
            <Divider/>
            <Space align={'end'} className={'buttons'}>
                <Form.Item>
                    <Link to={'/cart'}>
                        <Button>
                            Voltar
                        </Button>
                    </Link>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Concluir
                    </Button>
                </Form.Item>
            </Space>
        </Form>
    )
}