import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 430px;
  min-height: 100vh;
  height: 100%;
  overflow: hidden;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  margin: 0 auto;
  background: var(--primary-gradient);

  @media (max-width: 1280px) {
    width: 400px;
  }

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0;
    box-shadow: none;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

interface WrapType {
  children: ReactNode;
}

const Wrap = ({ children }: WrapType): JSX.Element => {
  return <Container>{children}</Container>;
};

export default Wrap;