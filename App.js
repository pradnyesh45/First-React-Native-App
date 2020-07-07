import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ProductList from './ProductList';
import { Container,Header,Content,H1,Text } from 'native-base';

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

export default function App() {

  const user = {
    firstName:'Greg',
    lastName:'Lim'
  }

  return (
    <ProductList />
    // <Container>
    //   <Header />
    //   <Content>
    //     <H1>Hello,</H1>
    //     <Text> {formatName(user)} </Text>
    //   </Content>
    // </Container>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textStyle:{
//     fontSize: 50
//   }
// });
