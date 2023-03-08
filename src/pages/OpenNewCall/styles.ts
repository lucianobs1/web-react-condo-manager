import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 9rem);

  header {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Form = styled.form`
  background: ${(props) => props.theme['gray-900']};
  padding: 3rem;
  min-width: 520px;
  max-width: 500px;

  border-radius: 8px;

  textarea,
  select,
  button {
    width: 100%;
    border-radius: 8px;
    border: none;
    padding: 1rem;
  }

  textarea,
  select {
    margin-bottom: 1rem;
  }

  select {
    background: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['gray-100']};
    outline: none;
  }

  textarea {
    min-height: 11.5rem;
    resize: none;
    background: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme.white};
    font-size: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-100']};
      font-size: 1rem;
    }
  }

  button {
    background: ${(props) => props.theme['blue-500']};
    color: #fff;
    font-weight: bold;
    margin-top: 0.5rem;
    transition: background-color 0.5s;

    &:hover {
      background: ${(props) => props.theme['blue-800']};
    }
  }
`;
