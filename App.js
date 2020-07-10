import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Container,Header,Content,Button,Text } from 'native-base';

export default function App(){

  const isValid = true;

  return(
    <Container>
      <Header />
      <Content>
        <Button disabled={!isValid}>
          <Text>Click Me!</Text>
        </Button>
        <Button danger disabled>
          <Text>Danger</Text>
        </Button>
      </Content>
    </Container>
  );
}
