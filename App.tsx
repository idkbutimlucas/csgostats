import { StatusBar } from "expo-status-bar";
import AxiosProvider from "./assets/context/AxiosProvider";
import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { Card, Paragraph, TextInput, Title } from "react-native-paper";

import { default as data } from "./api/data.json";
import { PlatformInfo } from "./types";

const App = () => {
  const [name, setName] = useState("");
  const Item = ({}: PlatformInfo) => (
    <SafeAreaView>
      <AxiosProvider>
        <Card style={styles.container}>
          <Card.Content style={styles.title}>
            <View>
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
              <Title style={styles.font}>
                {data.platformInfo.platformSlug}
              </Title>

              <Paragraph style={styles.font1}>
                Name : {data.platformInfo.platformUserHandle}
              </Paragraph>
              <Paragraph style={styles.font1}>
                ID : {data.platformInfo.platformUserId}
              </Paragraph>
              <Title style={styles.font}>Info</Title>
              <Text style={styles.font1}>
                Victoire :{" "}
                {JSON.stringify(data.segments[0].stats.timePlayed.percentile)} %
              </Text>
              <Text style={styles.font1}>
                Temps de jeux :{" "}
                {JSON.stringify(data.segments[0].stats.timePlayed.displayValue)
                  .replace('"', "")
                  .replace('"', "")}
              </Text>
              <Text style={styles.font1}>
                Nombre de Kill :{" "}
                {JSON.stringify(data.segments[0].stats.kills.value)}
              </Text>
              <Text style={styles.font1}>
                Nombre de deaths:{" "}
                {JSON.stringify(data.segments[0].stats.deaths.value)
                  .replace('"', "")
                  .replace('"', "")}
              </Text>
              <Text style={styles.font1}>
                Accurency :{" "}
                {JSON.stringify(
                  data.segments[0].stats.shotsAccuracy.percentile
                )}{" "}
                %
              </Text>
              <Text style={styles.font1}>
                BombsPlanted :{" "}
                {JSON.stringify(data.segments[0].stats.bombsPlanted.value)}
              </Text>
              <Text style={styles.font1}>
                BombsDefused :{" "}
                {JSON.stringify(data.segments[0].stats.bombsDefused.value)}
              </Text>
              <Text style={styles.font1}>
                Headshot :{" "}
                {JSON.stringify(data.segments[0].stats.headshotPct.percentile)}{" "}
                %
              </Text>
            </View>
          </Card.Content>
        </Card>
      </AxiosProvider>
    </SafeAreaView>
  );
  return (
    <>
      <View
        style={{
          marginTop: 50,
          marginLeft: 50,
          marginRight: 50,
        }}
      >
        <TextInput
          style={styles.input}
          onSubmitEditing={(value) => setName(value.nativeEvent.text)}
          placeholder="Steam ID 64"
        />
        <Text style={styles.font1}>Welcome {name}!</Text>
      </View>
      <Paragraph>
        <Item
          platformSlug={""}
          platformUserId={""}
          platformUserHandle={""}
          platformUserIdentifier={""}
          avatarUrl={""}
        />
      </Paragraph>
    </>
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
    backgroundColor: "#A3A3A3",
  },
  title: {
    backgroundColor: "#DBEAFE",
  },
  font: {
    fontSize: 20,
    fontWeight: "900",
    color: "#1F2937",
  },
  font1: {
    fontSize: 14,
    fontWeight: "700",
    color: "#075985",
  },

  safeContainer: {
    flex: 1,
  },
});

export default App;
