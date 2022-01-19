import { Layout, Menu } from "antd";
import React, { useState } from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { TopHeader, LogoWrapper, ContentWrapper } from "./styled";

interface Props {}

const Dashboard = (props: Props) => {
  const { SubMenu } = Menu;
  const { Sider, Content } = Layout;

  const [siderCollapsed, setSiderCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSiderCollapsed(!siderCollapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={siderCollapsed}>
        <LogoWrapper />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <SubMenu key="sub1" title="User" icon={<UserOutlined />}>
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub2" title="Team" icon={<TeamOutlined />}>
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <TopHeader className="site-layout-background">
          {React.createElement(
            siderCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggleSidebar,
            }
          )}
        </TopHeader>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <ContentWrapper>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
              quisquam, odit ipsum eos eligendi atque mollitia numquam
              temporibus sunt provident.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              odit assumenda, sequi alias, eveniet dolorum consequatur neque
              reiciendis quia magni saepe optio voluptates molestiae iste!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis, deleniti fuga! Suscipit quibusdam eligendi
              necessitatibus magni fuga et! Sint, ipsam nihil! Repellendus
              maxime repellat autem alias inventore, beatae ad quae. Quasi,
              accusantium? Quia, ratione. Est soluta id minima incidunt
              consequuntur laudantium, accusantium rerum perferendis ab eum,
              voluptate, aperiam excepturi beatae ea voluptatem laboriosam
              repellendus quam quod odio fugit ex aliquam. Error ipsum hic
              atque, modi dolorum placeat? Blanditiis, suscipit corrupti
              nesciunt labore atque, ullam, impedit numquam quod incidunt
              doloremque veritatis architecto ad optio delectus excepturi saepe
              quas dolorum sequi molestias recusandae! Veniam reprehenderit
              corrupti voluptatem impedit iste alias neque quidem!
            </p>
          </ContentWrapper>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
