import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  :root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-primary: #333;
    --text-secondary: #666;
    --background-light: rgba(255, 255, 255, 0.95);
    --border-color: #e1e1e1;
    --shadow-color: rgba(0, 0, 0, 0.1);
    --focus-shadow: rgba(102, 126, 234, 0.1);
  }

  body {
    min-height: 100vh;
    color: var(--text-primary);
    background-color: white;
  }

  input, button {
    font-family: inherit;
  }
`;