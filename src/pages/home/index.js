import React from 'react'
import Template from "../../components/template";
import {Carousel, Col, Divider, Row, Space} from "antd";
import {Slide, SlideImage} from "./styles";
import Chicote from '../../assets/carousel/tchupish.jpg';
import BebidaNutella from '../../assets/carousel/nutella.jpg';
import Beer from '../../assets/carousel/beer.jpg';
import Title from "antd/es/typography/Title";
import {Content} from "antd/es/layout/layout";
import Product from "../../components/product";
import PImage from '../../assets/tempproduct.jpg';

export default function Home() {
    return (
        <Template>
            <div>
                <Carousel autoplay dots>
                    <Slide>
                        <SlideImage src={Chicote}/>
                    </Slide>
                    <Slide>
                        <SlideImage src={BebidaNutella}/>
                    </Slide>
                    <Slide>
                        <SlideImage src={Beer}/>
                    </Slide>
                </Carousel>
            </div>
            <Content style={{padding: '50px'}}>
                <Space align={'start'} direction={'vertical'}>
                    <Title>
                        Recomendado
                    </Title>
                    <Row gutter={[48, 40]}>
                        <Col span={6}>
                            <Product id={12} image={PImage} title={'Tikira'} value={79.53}
                                     description={'A Tiquira é um destilado de mandioca muito popular no Maranhão. Alguns consideram a Tiquira a verdadeira aguardente brasileira por ser feita da mandioca, uma planta nativa.'}/>
                        </Col>
                        <Col span={6}>
                            <Product image={PImage} title={'Tikira'} value={79.53}
                                     description={'A Tiquira é um destilado de mandioca muito popular no Maranhão. Alguns consideram a Tiquira a verdadeira aguardente brasileira por ser feita da mandioca, uma planta nativa.'}/>
                        </Col>
                        <Col span={6}>
                            <Product image={PImage} title={'Tikira'} value={79.53}
                                     description={'A Tiquira é um destilado de mandioca muito popular no Maranhão. Alguns consideram a Tiquira a verdadeira aguardente brasileira por ser feita da mandioca, uma planta nativa.'}/>
                        </Col>
                        <Col span={6}>
                            <Product image={PImage} title={'Tikira'} value={79.53}
                                     description={'A Tiquira é um destilado de mandioca muito popular no Maranhão. Alguns consideram a Tiquira a verdadeira aguardente brasileira por ser feita da mandioca, uma planta nativa.'}/>
                        </Col>
                    </Row>
                </Space>
                <Space align={'start'} direction={'vertical'}>
                    <Title>
                        Ultimos Drinks
                    </Title>
                    <Row gutter={[48, 40]}>
                        <Col span={4}>
                            <Product id={12} image={PImage} title={'Tikira'} value={79.53}
                                     description={'A Tiquira é um destilado de mandioca muito popular no Maranhão. Alguns consideram a Tiquira a verdadeira aguardente brasileira por ser feita da mandioca, uma planta nativa.'}/>
                        </Col>
                        <Col span={4}>
                            <Product image={PImage} title={'Tikira'} value={79.53}
                                     description={'A Tiquira é um destilado de mandioca muito popular no Maranhão. Alguns consideram a Tiquira a verdadeira aguardente brasileira por ser feita da mandioca, uma planta nativa.'}/>
                        </Col>
                        <Col span={4}>
                            <Product image={PImage} title={'Tikira'} value={79.53}
                                     description={'A Tiquira é um destilado de mandioca muito popular no Maranhão. Alguns consideram a Tiquira a verdadeira aguardente brasileira por ser feita da mandioca, uma planta nativa.'}/>
                        </Col>
                        <Col span={4}>
                            <Product image={PImage} title={'Tikira'} value={79.53}
                                     description={'A Tiquira é um destilado de mandioca muito popular no Maranhão. Alguns consideram a Tiquira a verdadeira aguardente brasileira por ser feita da mandioca, uma planta nativa.'}/>
                        </Col>
                        <Col span={4}>
                            <Product image={PImage} title={'Tikira'} value={79.53}
                                     description={'A Tiquira é um destilado de mandioca muito popular no Maranhão. Alguns consideram a Tiquira a verdadeira aguardente brasileira por ser feita da mandioca, uma planta nativa.'}/>
                        </Col>
                        <Col span={4}>
                            <Product image={PImage} title={'Tikira'} value={79.53}
                                     description={'A Tiquira é um destilado de mandioca muito popular no Maranhão. Alguns consideram a Tiquira a verdadeira aguardente brasileira por ser feita da mandioca, uma planta nativa.'}/>
                        </Col>
                    </Row>
                </Space>
                <Space align={'start'} direction={'vertical'}>
                    <Title>
                        Exótico
                    </Title>
                    <Row gutter={[48, 40]}>
                        <Col span={4}>
                            <Product id={12} image={PImage} title={'Tikira'} value={79.53}
                                     description={'A Tiquira é um destilado de mandioca muito popular no Maranhão. Alguns consideram a Tiquira a verdadeira aguardente brasileira por ser feita da mandioca, uma planta nativa.'}/>
                        </Col>
                        <Col span={4}>
                            <Product image={PImage} title={'Tikira'} value={79.53}
                                     description={'A Tiquira é um destilado de mandioca muito popular no Maranhão. Alguns consideram a Tiquira a verdadeira aguardente brasileira por ser feita da mandioca, uma planta nativa.'}/>
                        </Col>
                        <Col span={4}>
                            <Product image={PImage} title={'Tikira'} value={79.53}
                                     description={'A Tiquira é um destilado de mandioca muito popular no Maranhão. Alguns consideram a Tiquira a verdadeira aguardente brasileira por ser feita da mandioca, uma planta nativa.'}/>
                        </Col>
                        <Col span={4}>
                            <Product image={PImage} title={'Tikira'} value={79.53}
                                     description={'A Tiquira é um destilado de mandioca muito popular no Maranhão. Alguns consideram a Tiquira a verdadeira aguardente brasileira por ser feita da mandioca, uma planta nativa.'}/>
                        </Col>
                        <Col span={4}>
                            <Product image={PImage} title={'Tikira'} value={79.53}
                                     description={'A Tiquira é um destilado de mandioca muito popular no Maranhão. Alguns consideram a Tiquira a verdadeira aguardente brasileira por ser feita da mandioca, uma planta nativa.'}/>
                        </Col>
                        <Col span={4}>
                            <Product image={PImage} title={'Tikira'} value={79.53}
                                     description={'A Tiquira é um destilado de mandioca muito popular no Maranhão. Alguns consideram a Tiquira a verdadeira aguardente brasileira por ser feita da mandioca, uma planta nativa.'}/>
                        </Col>
                    </Row>
                </Space>
            </Content>
        </Template>
    );
}