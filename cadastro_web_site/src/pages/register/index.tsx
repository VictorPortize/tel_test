import React from 'react';
import { Container,Button,Input,Title,Subtitle } from '../../components'
import { FormGroup } from './styles'
import useRegister from './useRegister'
import Content from '../../components/content'

function Register() {
  const { push } = useRegister()
  return (
    <Container>
      <Content>
        <Title>Registrar usuário</Title>
        <FormGroup>
          <Subtitle>Dados pessoais:</Subtitle>
          <Input placeholder={"Nome:"} />
          <Input placeholder={"E-mail:"} />
          <Input placeholder={"CPF:"} />
          <Input placeholder={"PIS:"} />
          <Input placeholder={"Senha:"} />
          <Subtitle>Endereço:</Subtitle>
          <Input placeholder={"CEP:"} />
          <Input placeholder={"País:"} />
          <Input placeholder={"Estado:"} />
          <Input placeholder={"Município:"} />
          <Input placeholder={"Rua:"} />
          <Input placeholder={"Número:"} />
          <Input placeholder={"Complemento:"} />
          <Button onClick={() => push('/home')} type="button">Registrar</Button>
        </FormGroup>
      </Content>
    </Container>
  );
}

export default Register;
