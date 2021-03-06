import styled, { css } from 'styled-components';

export const Container = styled.div`
  text-align: left;

  div {
    span {
      color: var(--negative);
    }
  }
`;

export const InputContainer = styled.div`
  background: var(--gray-2);
  border-radius: 4px;
  border: 0;
  color: var(--gray-0);
  padding: 1rem;
  width: 100%;
  display: flex;
  transition: 0.4s;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--negative);
    `}

  input {
    background: transparent;
    border: 0;
    align-items: center;
    flex: 1;
    color: var(--gray-0);
  }

  svg {
    margin-right: 10px;
  }
`;
