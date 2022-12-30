import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";

const Detail = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 420, height: 200 }}
        source={{ uri: `${props.image}` }}
      />
      <View style={styles.insideContainer}>
        <Text style={styles.cartitle}>{props.title}</Text>
        <Text style={styles.carDesc}>{props.description}</Text>
        <Text style={styles.author}>Author: {props.author}</Text>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#353935",
    paddingBottom: 480,
  },
  cartitle: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 10,
  },
  insideContainer: {
    marginLeft: 15,
    marginRight: 15,
  },
  carDesc: {
    color: "#ffffff",
    fontWeight: "300",
    marginTop: 2,
  },
  author: {
    color: "#ffffff",
    marginTop: 5,
    fontWeight: "600",
  },
});
