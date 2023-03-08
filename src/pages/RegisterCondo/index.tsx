import { FormEvent, useState } from 'react';
import { Container, FormContainer, Form } from './styles';

export function RegisterCondo() {
  const [condo, setCondo] = useState('');
  const [janitor, setJanitor] = useState('');
  const [apartmentManager, setApartmentManager] = useState('');

  function handleTest(event: FormEvent) {
    event.preventDefault();
    console.log(condo);
    console.log(janitor);
    console.log(apartmentManager);
  }

  return (
    <Container>
      <header>
        <h1>Register Condo</h1>
      </header>

      <FormContainer>
        <Form onSubmit={handleTest}>
          <input
            type="text"
            name="janitor"
            placeholder="Write janitor name here"
            value={janitor}
            onChange={(e) => setJanitor(e.target.value)}
          />

          <input
            type="text"
            name="apartment-manager"
            placeholder="Write apartment manager name here"
            value={apartmentManager}
            onChange={(e) => setApartmentManager(e.target.value)}
          />

          <input
            type="text"
            name="name"
            placeholder="Write here name of condo"
            value={condo}
            onChange={(e) => setCondo(e.target.value)}
          />

          <button type="submit">Register</button>
        </Form>
      </FormContainer>
    </Container>
  );
}
