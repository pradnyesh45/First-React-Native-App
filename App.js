// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Container } from "native-base";
import MyCard from "./MyCard";

export default function App() {
  return (
    <Container>
      <MyCard>
        This is a long sentence, and I want to insert content into the Card
        component from the outside.
      </MyCard>
    </Container>
  );
}
