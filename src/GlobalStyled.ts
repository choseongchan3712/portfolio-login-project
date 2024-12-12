import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
${reset}

*{
  box-sizing: border-box;
  word-spacing: -1px;
}

img {
  display: block;
  width: 100%;
}

a {
  text-decoration: none;
  display: block;
}
`;