import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 9rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;

  aside {
    img {
      display: block;
      height: 26rem;
    }
  }

  main {
    h1 {
      font-size: 2.5rem;
      color: ${(props) => props.theme['gray-100']};
    }

    p {
      margin-top: 1rem;
      color: ${(props) => props.theme['gray-100']};
      line-height: 1.7;
    }

    > div {
      margin: 2rem 0;
    }

    span {
      display: inline-block;
      background: ${(props) => props.theme['green-700']};
      border-radius: 99999px;
      padding: 0.5rem;
      font-size: 0.8rem;
      font-weight: 600;

      & + span {
        margin-left: 0.5rem;
      }
    }
  }
`;

export const SocialNetworkContainer = styled.div`
  text-align: center;
`;

export const SocialNetworkList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  list-style: none;
  padding: 1rem;
  margin-top: 0.5rem;

  border-radius: 8px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme['gray-100']};
    background: ${(props) => props.theme['green-700']};
    height: 36px;
    width: 36px;
    border-radius: 50%;
    transition: background-color 0.5s;

    &:hover {
      background: ${(props) => props.theme['green-500']};
    }
  }
`;
