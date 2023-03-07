import { FormEvent, useState } from 'react';
import { Container, FormContainer, Form } from './styles';

export function OpenNewCall() {
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
        <h1>Open a Call</h1>
      </header>

      <FormContainer>
        <Form onSubmit={handleTest}>
          <select name="condos" onChange={(e) => setCondo(e.target.value)}>
            <option value="">SELECT ONE CONDO</option>
            {condos.map((condo) => (
              <option key={condo} value={condo}>
                {condo}
              </option>
            ))}
          </select>

          <textarea
            name="description"
            placeholder="Describe call here"
            onChange={(e) => setDescribe(e.target.value)}
          />

          <button type="submit">Register</button>
        </Form>
      </FormContainer>
    </Container>
  );
}
