import styled from "styled-components";
import { Header } from "antd/lib/layout/layout";

export const TopHeader = styled(Header)`
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
`;

export const ContentWrapper = styled.div`
  padding: 10px 20px;
`;
