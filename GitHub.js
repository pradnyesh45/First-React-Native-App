import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Content,
  Spinner,
  List,
  ListItem,
  Left,
  Thumbnail,
  Body,
  Text,
  Right,
  Button,
} from "native-base";
import { Linking } from "react-native";

function GitHub() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("greg");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://api.github.com/search/users?q=${searchTerm}`)
      .then((res) => {
        setData(res.data.items);
        setIsLoading(false);
      });
  }, [searchTerm]);

  const listUsers = data.map((user) => (
    <ListItem key={user.id} thumbnail>
      <Left>
        <Thumbnail square source={{ uri: user.avatar_url }} />
      </Left>
      <Body>
        <Text>Login: {user.login}</Text>
        <Text note numberOfLines={1}>
          Id: {user.id}
        </Text>
      </Body>
      <Right>
        <Button
          onPress={() => {
            Linking.openURL(user.html_url);
          }}
          transparent
        >
          <Text>View</Text>
        </Button>
      </Right>
    </ListItem>
  ));

  return (
    <Content>
      {isLoading && <Spinner />}
      <List>{listUsers}</List>
    </Content>
  );
}
export default GitHub;
