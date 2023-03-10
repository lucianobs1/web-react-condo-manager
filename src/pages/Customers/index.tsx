import { MagnifyingGlass, Buildings, Pencil, Trash } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Form, CustomerContainer, Customer } from './styles';

export function Customers() {
  const [condoName, setCondoName] = useState('');

  function handleSearch(event: FormEvent) {
    event.preventDefault();

    console.log('condo:', condoName);
  }
  return (
    <Container>
      <Form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Write here name of condo"
          value={condoName}
          onChange={(e) => setCondoName(e.target.value)}
        />
        <button type="submit">
          <MagnifyingGlass size={24} />
        </button>
      </Form>

      <CustomerContainer>
        <Customer>
          <NavLink to="/customer/1">
            <header>
              <p>JC1</p>
              <Buildings size={24} />
            </header>
          </NavLink>
        </Customer>

        <Customer>
          <NavLink to="/customer/2">
            <header>
              <p>Vila Andrade</p>
              <Buildings size={24} />
            </header>
          </NavLink>
        </Customer>

        <Customer>
          <NavLink to="/customer/3">
            <header>
              <p>Vila Mariana SUl</p>
              <Buildings size={24} />
            </header>
          </NavLink>
        </Customer>

        <Customer>
          <NavLink to="/customer/4">
            <header>
              <p>Real Parque</p>
              <Buildings size={24} />
            </header>
          </NavLink>
        </Customer>
      </CustomerContainer>
    </Container>
  );
}
