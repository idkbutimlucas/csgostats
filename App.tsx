import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";

import { default as data } from "./api/data.json";
import { PlatformInfo } from "./types";

const App = () => {
  const Item = ({ item }: PlatformInfo) => {
    return (
      <SafeAreaView>
        <Card>
          <Card.Content>
            <Card.Cover
              style={{
                height: 300,
                width: 300,
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "50%",
              }}
              source={{ uri: data.platformInfo.avatarUrl }}
            />
            <Title>{data.platformInfo.platformSlug}</Title>
            <Paragraph>{data.platformInfo.platformUserId}</Paragraph>
            <Paragraph>{data.platformInfo.platformUserHandle}</Paragraph>
            <Paragraph>{data.platformInfo.platformUserIdentifier}</Paragraph>
          </Card.Content>
        </Card>
      </SafeAreaView>
    );
  };
  return (
    <Paragraph>
      <Item />
    </Paragraph>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkgrey",
  },

  safeContainer: {
    flex: 1,
  },
});

export default App;
