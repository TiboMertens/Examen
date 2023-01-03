import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Detail from "../components/carDetails";

const Details = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Detail
        title={route.params.itemTitle}
        description={route.params.itemDesc}
        image={route.params.itemImage}
        author={route.params.itemAuthor}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Reviews")}
      >
        <Text style={styles.btnText}>Go to review</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#353935",
    paddingBottom: 480,
  },
  btn: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#61CE70",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    borderRadius: 4,
  },
  btnText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
