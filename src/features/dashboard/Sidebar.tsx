import styled from "styled-components";

const SidebarWrapper = styled.div`
  height: 100vh;
  width: 100px;
`;

interface Props {}

const Sidebar = (props: Props) => {
  return (
    <SidebarWrapper>
      <h1>SIDEBAR</h1>
    </SidebarWrapper>
  );
};

export default Sidebar;
