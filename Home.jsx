import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatListDemo } from "./component/FlatList";

const movie = [
  {
    name: "Thor",
  },
  {
    name: "IRON MAN",
  },
  {
    name: "HULK",
  },
  {
    name: "CAPTAIN AMERICA",
  },
  {
    name: "SPIDERMAN",
  },
  {
    name: "HULK",
  },
  {
    name: "CAPTAIN AMERICA",
  },
  {
    name: "SPIDERMAN",
  },
  {
    name: "HULK",
  },
  {
    name: "CAPTAIN AMERICA",
  },
  {
    name: "SPIDERMAN",
  },
  {
    name: "HULK",
  },
  {
    name: "CAPTAIN AMERICA",
  },
  {
    name: "SPIDERMAN",
  },
];

export const Home = () => {
  return (
    <View>
      <Text>
        <FlatListDemo movie={movie} />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
