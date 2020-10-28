import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import Contents from './Contents';


const { Header, Content, Footer } = Layout;

class Layout1 extends React.Component {
  render() {  
  return (             
      <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
              <Menu.Item key="4" style={{float: 'right'}}>Log Out</Menu.Item>
              <Menu.Item key="5" style={{float: 'right'}}>Log In</Menu.Item>
            </Menu>
          </Header>      
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>            
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>             
                <Breadcrumb.Item>App</Breadcrumb.Item>            
              </Breadcrumb>
              <div className="site-layout-content">
                  <Contents />                              
              </div>
            </Content>                      
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>       
  );}    
}

export default Layout1;