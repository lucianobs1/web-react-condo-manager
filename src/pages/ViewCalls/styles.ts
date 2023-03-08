import styled from 'styled-components';

export const Container = styled.div`
  max-width: 64rem;
  width: 100%;
  margin: 0 auto;

  > header {
    text-align: center;
    margin-bottom: 2rem;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: ${(props) => props.theme['blue-500']};
  }
`;

export const CallsContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export const CallHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;

  span {
    color: ${(props) => props.theme['blue-500']};
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const Call = styled.div`
  background: ${(props) => props.theme['gray-700']};
  border-radius: 8px;
  height: max-content;
  transition: background-color 0.4s;
  text-align: center;

  &:hover {
    background: ${(props) => props.theme['gray-600']};
  }

  main {
    padding: 1rem;
    color: ${(props) => props.theme['gray-300']};
  }
`;

export const CallFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  border-top: 2px solid ${(props) => props.theme['gray-900']};

  div {
    display: flex;
    gap: 0.5rem;

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['blue-800']};
    padding: 0.5rem 1rem;
    border-radius: 8px;
  }
`;
