import React from 'react'
import {Layout, Menu} from "antd";
import './styles.css';

const { Header, Content, Footer } = Layout;

export default function Template({children}){
    return (
        <Layout className="layout">
            <Header>
                <Menu mode="horizontal" direction={"rtl"} defaultSelectedKeys={['1']}>
                    <Menu.Item className={'logo'} key="1">
                        Alcoomerce
                    </Menu.Item>
                    <Menu.Item key="2">Exoticas</Menu.Item>
                    <Menu.Item key="3">Drinks</Menu.Item>
                    <Menu.Item key="4">Whiskey</Menu.Item>
                    <Menu.Item key="5">Rolês</Menu.Item>
                </Menu>
            </Header>
            <Content>
                {children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>Alcoomerce ©2020 Created by Pecem Team</Footer>
        </Layout>
    );
}