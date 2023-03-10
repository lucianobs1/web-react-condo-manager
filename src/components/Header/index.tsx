import { NavLink } from 'react-router-dom';
import logoImg from '../../assets/logo-white.png';

import { HeaderContainer, NavContainer, NavLinks } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <NavContainer>
        <NavLink to="/">
          <img src={logoImg} />
        </NavLink>

        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/open-new-call">Open New Call</NavLink>
          <NavLink to="/view-calls">View Calls</NavLink>
          <NavLink to="/register-condo">Register Condo</NavLink>
          <NavLink to="/customers">Customers</NavLink>
        </NavLinks>
      </NavContainer>
    </HeaderContainer>
  );
}
