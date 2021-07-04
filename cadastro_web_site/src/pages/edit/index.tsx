import React from 'react';
import { Container,Button,Input,Title,Subtitle } from '../../components'
import { FormGroup } from './styles'
import useEdit from './useEdit'
import Content from '../../components/content'

function Edit() {
  const { push } = useEdit()
  return (
    <Container>
      <Content>
        <Title>Editar dados</Title>
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
          <Button onClick={() => push('/home')} type="button">Salvar</Button>
        </FormGroup>
      </Content>
    </Container>
  );
}

export default Edit;
