import { Buildings, Calendar, Timer } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import {
  Container,
  CallsContainer,
  Call,
  CallFooter,
  CallHeader,
} from './styles';

export function ViewCalls() {
  return (
    <Container>
      <header>
        <h1>Open Calls</h1>
      </header>

      <CallsContainer>
        <NavLink to="/call/id/1">
          <Call>
            <CallHeader>
              <Buildings size={24} />
              <span>JC1</span>
            </CallHeader>
            <main>
              <p>
                Portão garagem externo travado aberto na entrada de um veículo
              </p>
            </main>
            <CallFooter>
              <div>
                <Timer size={24} />
                <p>14:23</p>
              </div>

              <div>
                <Calendar size={24} />
                <p>25/03/2023</p>
              </div>
            </CallFooter>
          </Call>
        </NavLink>
        <NavLink to="/call/id/2">
          <Call>
            <CallHeader>
              <Buildings size={24} />
              <span>Vila Andrade</span>
            </CallHeader>
            <main>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                odit quidem pariatur?
              </p>
            </main>
            <CallFooter>
              <div>
                <Timer size={24} />
                <p>08:23</p>
              </div>

              <div>
                <Calendar size={24} />
                <p>25/03/2023</p>
              </div>
            </CallFooter>
          </Call>
        </NavLink>
        <NavLink to="/call/id/3">
          <Call>
            <CallHeader>
              <Buildings size={24} />
              <span>Real Parque</span>
            </CallHeader>
            <main>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi minima inventore sit accusantium illo dicta.
              </p>
            </main>
            <CallFooter>
              <div>
                <Timer size={24} />
                <p>12:00</p>
              </div>

              <div>
                <Calendar size={24} />
                <p>02/02/2023</p>
              </div>
            </CallFooter>
          </Call>
        </NavLink>
        <NavLink to="/call/id/4">
          <Call>
            <CallHeader>
              <Buildings size={24} />
              <span>Nova York</span>
            </CallHeader>
            <main>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                recusandae blanditiis illum laudantium accusamus magnam sit
                asperiores eaque beatae labore?
              </p>
            </main>
            <CallFooter>
              <div>
                <Timer size={24} />
                <p>13:13</p>
              </div>

              <div>
                <Calendar size={24} />
                <p>22/01/2023</p>
              </div>
            </CallFooter>
          </Call>
        </NavLink>
        <NavLink to="/call/id/5">
          <Call>
            <CallHeader>
              <Buildings size={24} />
              <span>Arizona</span>
            </CallHeader>
            <main>
              <p>
                Portão garagem externo travado aberto na entrada de um veículo
              </p>
            </main>
            <CallFooter>
              <div>
                <Timer size={24} />
                <p>17:23</p>
              </div>

              <div>
                <Calendar size={24} />
                <p>25/02/2023</p>
              </div>
            </CallFooter>
          </Call>
        </NavLink>
      </CallsContainer>
    </Container>
  );
}
