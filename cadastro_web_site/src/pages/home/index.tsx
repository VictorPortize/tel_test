import React from 'react';
import { Container,Button,Title,Content } from '../../components'

import useHome from './useHome'

function Home() {
  const { replace,push } = useHome();
  return (
    <Container>
      <Content>
        <Title>Olá Usuário, o que deseja fazer?</Title>
      </Content>
      <Button onClick={() => push('/edit')} >Editar dados</Button>
      <Button onClick={() => replace('/')} >Sair</Button>
    </Container>
  );
}

export default Home;
