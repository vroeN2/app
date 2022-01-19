import { Layout, Menu, Space } from "antd";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

interface Props {}

const Dashboard = (props: Props) => {
  const { SubMenu } = Menu;
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <SubMenu key="sub1" title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">Files</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header>
          <Topbar />
        </Header>
        <Content>
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
        <Footer>
          <FooterWrapper>
            <p>Lorem ipsum dolor sit amet.</p>
          </FooterWrapper>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
