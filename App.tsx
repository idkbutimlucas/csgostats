import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";

import { default as data } from "./api/data.json";
import { PlatformInfo } from "./types";

const App = () => {
  const Item = ({ item }: PlatformInfo) => {
    return (
      <Card>
        <Card.Content>
          <Title>{item.platformSlug}</Title>
          <Paragraph>
            {/* {item.platformUserHandle} */}
            test
          </Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: item.url }} />
      </Card>
    );
  };

  const renderItem = () => {
    return <Text>Hey</Text>;
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Text>{JSON.stringify(data.segments[0].stats)}</Text>
    </SafeAreaView>
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
