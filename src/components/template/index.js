import React from 'react'
import {Layout, Menu} from "antd";
import './styles.css';
import {ShoppingCartOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const {Header, Content, Footer} = Layout;

export default function Template({children}) {
    let cart = useSelector(state => state.cart);

    return (
        <Layout className="layout">
            <Header>
                <Menu mode="horizontal" direction={"rtl"} defaultSelectedKeys={['1']}>
                    <Menu.Item className={'logo'} key="1">
                        <Link style={{color: 'inherit'}} to={'/'}>
                            Alcoomerce
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link style={{color: 'inherit'}} to={'/cart'}>
                            <ShoppingCartOutlined/>
                            Carrinho {cart.length > 0 ? `(${cart.length})` : ""}
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link style={{color: 'inherit'}} to={'/category/whiskey'}>
                            Whiskey
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link style={{color: 'inherit'}} to={'/category/drinks'}>
                            Drinks
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link style={{color: 'inherit'}} to={'/category/exotics'}>
                            Exoticas
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content>
                {children}
            </Content>
            <Footer style={{textAlign: 'center'}}>Alcoomerce ©2020 Created by Pecem Team</Footer>
        </Layout>
    );
}