import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --color-primary: #ff577f;
    --color-primary-focus: #ff427f;
    --color-primary-negative: #59323f;
    --gray-4: #121214;
    --gray-3: #212529;
    --gray-2: #343b41;
    --gray-1: #868e96;
    --gray-0: #f8f9fa;
    --success: #3fe864;
    --negative: #e83f5b;
  }

  body {
    background: var(--gray-4);
    color: var(--gray-0);
    font-family: 'Inter';
  }

  body, input, button {    
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  h1 {
    color: var(--color-primary);
  }

  button {
    cursor: pointer; 
  }

  a {
    text-decoration: none;
  }
`;
