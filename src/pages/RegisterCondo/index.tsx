import { FormEvent, useState } from 'react';
import { Container, FormContainer, Form } from './styles';

export function RegisterCondo() {
  const [condo, setCondo] = useState('');
  const [describe, setDescribe] = useState('');

  const condos = ['JC1', 'NOVA YORK', 'VILA ANDRADE', 'PARAÍSO'];

  function handleTest(event: FormEvent) {
    event.preventDefault();
    console.log(condo);
    console.log(describe);
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
          />

          <input
            type="text"
            name="apartment-manager"
            placeholder="Write apartment manager name here"
          />

          <input
            type="text"
            name="name"
            placeholder="Write here name of condo"
          />

          <button type="submit">Register</button>
        </Form>
      </FormContainer>
    </Container>
  );
}
