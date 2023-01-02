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

import SearchFilter from "../components/searchFilter";

const Cars = ({ navigation }) => {
  const [Cars, setCars] = useState([]);

  const getCars = async () => {
    try {
      const response = await fetch(
        "https://tibomertens.be/wp-json/wp/v2/posts?categories=8",
        {}
      );
      const json = await response.json();
      setCars(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  const [input, setInput] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          value={input}
          onChangeText={(text) => setInput(text)}
          style={{ fontSize: 16, marginLeft: 10 }}
          placeholder="Search"
        />
      </View>
      <SearchFilter data={Cars} input={input} setInput={setInput} navigation={navigation} />
    </View>
  );
};

export default Cars;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#353935"
  },
  searchContainer: {
    backgroundColor: "#Eaf0f3",
    width: "83.5%",
    marginLeft: 30,
    marginTop: 20,
    borderRadius: 7,
    paddingTop: 2,
    paddingBottom: 2,
  },
});
