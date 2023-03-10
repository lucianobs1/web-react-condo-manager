import styled from 'styled-components';

export const Container = styled.div`
  max-width: 64rem;
  width: 100%;
  margin: 0 auto;
`;

export const Form = styled.form`
  max-width: 32rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  margin: 0 auto;
  padding: 1rem;

  input {
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-100']};
    outline: none;
    border: none;
    width: 100%;
    border-radius: 8px;
    border: none;
    padding: 1rem;

    & + input {
      margin-top: 1rem;
    }

    &::placeholder {
      color: ${(props) => props.theme['gray-100']};
      font-size: 1rem;
    }
  }

  button {
    border: none;
    background: ${(props) => props.theme['blue-500']};
    padding: 0.5rem;
    border-radius: 8px;

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`;

export const CustomerContainer = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  cursor: pointer;
`;

export const Customer = styled.div`
  background: ${(props) => props.theme['gray-900']};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.3);
  transition: background-color 0.4s;

  a {
    text-decoration: none;
    color: ${(props) => props.theme['gray-100']};
  }

  &:hover {
    background: ${(props) => props.theme['gray-700']};
  }

  header {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }
`;
