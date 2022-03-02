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
  const Item = ({}: PlatformInfo) => (
    <SafeAreaView>
      <Card style={styles.container}>
        <Card.Content>
          <Card.Cover
            style={{
              height: 100,
              width: 100,
              margin: 10,
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
          <Title>Info</Title>
          <Text>
            Pourcentage de victoire :
            {JSON.stringify(data.segments[0].stats.timePlayed.percentile)} %
          </Text>
          <Text>
            Temps de jeux :
            {JSON.stringify(data.segments[0].stats.timePlayed.displayValue)}
          </Text>
          <Text>
            Nombre de Kill:
            {JSON.stringify(data.segments[0].stats.kills.value)}
          </Text>
          <Text>
            Nombre de deaths:
            {JSON.stringify(data.segments[0].stats.deaths.value)}
          </Text>
          <Text>
            KDA:
            {JSON.stringify(data.segments[0].stats.kd.value)}
          </Text>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
  return (
    <Paragraph>
      <Item
        platformSlug={""}
        platformUserId={""}
        platformUserHandle={""}
        platformUserIdentifier={""}
        avatarUrl={""}
      />
    </Paragraph>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignContent: "center",
    // alignItems: "center",
    marginTop: 20,
    marginLeft: "20%",
    padding: 10,
    backgroundColor: "#DBEAFE",
  },

  card: {},

  safeContainer: {
    flex: 1,
  },
});

export default App;
