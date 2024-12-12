import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
position: relative;
width: 430px;
min-height: 100vh;
height: 100%;
overflow: hidden;
/* border: 1px solid rgba(0, 0, 0, 0.1); */
box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.1);
border-radius: 20px;
margin: 0 auto;
`;

interface WrapType {
  children:ReactNode;
}

const Wrap = ({children}:WrapType):JSX.Element => {
  return <Container>{children}</Container>;
};

export default Wrap;