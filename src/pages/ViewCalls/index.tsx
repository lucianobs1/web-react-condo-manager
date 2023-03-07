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

      <NavLink to={'/call/id-call'}>
        <CallsContainer>
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
        </CallsContainer>
      </NavLink>
    </Container>
  );
}
