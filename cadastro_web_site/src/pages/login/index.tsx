import React from 'react';
import { Container,Button,Input,Title,Content} from '../../components'
import {Center,ClickText, Linking} from './styles'

import useLogin from './useLogin'

function Login() {
  const { replace } = useLogin()
  return (
    <Container>
      <Content>
        <Title>Olá Visitante</Title>
        <Center>
          <Input placeholder={"Email/CPF ou PIS:"} />
          <Input type={'password'} placeholder={"Senha:"} />
          <Button onClick={() => replace('Home')} type="button">Entrar</Button>
          <ClickText>Clique aqui para se <Linking to='/register' >registrar</Linking></ClickText>
        </Center>
      </Content>
    </Container>
  );
}

export default Login;
