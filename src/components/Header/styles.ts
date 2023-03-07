import styled from 'styled-components';

export const HeaderContainer = styled.header`
  max-width: 90rem;
  width: 100%;
  padding: 1.5rem 1rem;
  margin: 0 auto;
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: ${(props) => props.theme['gray-100']};
    text-decoration: none;
    transition: color 0.4s;

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    &:not(.active):hover {
      border-bottom: 3px solid ${(props) => props.theme['green-500']};
    }

    &.active {
      color: ${(props) => props.theme['green-500']};
    }
  }
`;
