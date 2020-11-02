import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const CustomLayout = (props) => {

const handleClick= event => {

}
  return (
<Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          Transactions
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />} onClick={handleClick}>
          Create Transaction
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}></Footer>
    </Layout>
  </Layout>
  );
}

export default CustomLayout;