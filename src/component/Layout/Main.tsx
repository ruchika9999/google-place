import { Layout } from "antd";

const { Sider, Content } = Layout;

const siderStyle: React.CSSProperties = {
  height: "100vh",
  background: "#FFF",
};

interface LayoutProps {
  leftSide: React.ReactNode;
  mainContainer: React.ReactNode;
}

const MainLayout = (props: LayoutProps) => {
  const { leftSide, mainContainer } = props;

  return (
    <Layout>
      <Sider width={400} style={siderStyle}>
        {leftSide}
      </Sider>
      <Layout>
        <Content>{mainContainer}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
