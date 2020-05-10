import React, { useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import { getCurrentUser } from '../../utils/localStorage';
import Router from '../../routes';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Home = () => {
  const history = useHistory();
  let { path, url } = useRouteMatch();

  useEffect(() => {
    const user = getCurrentUser();

    console.log('user', user);
    if (!user) {
      history.push('/');
    }
  }, [history]);

  const handleLogOut = () => {
    localStorage.removeItem('user');
    history.push('/');
  };

  return (
    <Layout>
      <Header className="header"></Header>
      <Layout>
        <Sider
          width={200}
          className="site-layout-background"
          style={{ height: '100vh' }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['0']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="Features">
              <Menu.Item key="1">
                <Link to={`${path}/lichhen`}>Lịch Hẹn</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to={`${path}/benhnhan`}>Bệnh nhân</Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="sub3" icon={<NotificationOutlined />} title="User">
              <Menu.Item key="10" onClick={handleLogOut}>
                Logout
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            <Router></Router>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;
