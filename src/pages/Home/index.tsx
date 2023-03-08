import {
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import dashboardImg from '../../assets/dashboard.svg';
import {
  Container,
  ContentContainer,
  SocialNetworkContainer,
  SocialNetworkList,
} from './styles';

export function Home() {
  return (
    <Container>
      <ContentContainer>
        <aside>
          <img src={dashboardImg} />
        </aside>
        <main>
          <h1>
            Manager your <br />
            Condominium easily 👷🏽‍♀️
          </h1>
          <p>
            With us u can easily manager all functions in your condominium.
            <br /> We work hard to make your activities simple and effective.
          </p>
          <div>
            <span>Register condo</span>
            <span>Register employees</span>
            <span>Register Calls</span>
            <span>Control Calls</span>
          </div>

          <SocialNetworkContainer>
            <h3>My Social Networks</h3>
            <SocialNetworkList>
              <li>
                <NavLink to="#">
                  <InstagramLogo size={24} />
                </NavLink>
              </li>
              <li>
                <NavLink to="#">
                  <FacebookLogo size={24} />
                </NavLink>
              </li>
              <li>
                <NavLink to="#">
                  <GithubLogo size={24} />
                </NavLink>
              </li>
              <li>
                <NavLink to="#">
                  <LinkedinLogo size={24} />
                </NavLink>
              </li>
            </SocialNetworkList>
          </SocialNetworkContainer>
        </main>
      </ContentContainer>
    </Container>
  );
}
