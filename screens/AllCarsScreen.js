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

  return (
    <View style={styles.container}>
      <View style={styles.shoppingCart}>
        <Image
          style={styles.icon}
          source={require("../assets/shoppingCart.png")}
        />
        <Text style={styles.shoppingCartAmount}>1</Text>
      </View>
      <FlatList
        style={styles.list}
        data={Cars}
        renderItem={({ item }) => (
          <View style={styles.carsContainer}>
            {item.yoast_head_json?.og_image !== undefined && (
              <Image
                style={styles.image}
                source={{ uri: `${item.yoast_head_json.og_image[0].url}` }}
              />
            )}
            <Text style={styles.carTitle}>{item.title.rendered}</Text>

            <Pressable
              onPress={() =>
                navigation.navigate("Details", {
                  itemTitle: item.title.rendered,
                  itemDesc: item.rttpg_excerpt,
                  itemAuthor: item.yoast_head_json.author,
                  itemImage: item.yoast_head_json.og_image[0].url,
                })
              }
            >
              <Text style={styles.bekijkBtn}>bekijk product</Text>
            </Pressable>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default Cars;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    marginLeft: "auto",
    marginRight: "auto",
  },
  shoppingCartAmount: {
    marginTop: 37,
    marginLeft: 2,
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  shoppingCart: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    right: 20,
  },
  icon: {
    width: 25,
    height: 25,
    marginTop: 20,
  },
  list: {
    marginTop: 75,
  },
  carsContainer: {
    width: 350,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 50,
    paddingTop: 25,
    paddingBottom: 25,
    backgroundColor: "#545454",
    borderRadius: 10,
  },
  container: {
    backgroundColor: "#353935",
  },
  carTitle: {
    color: "#ffffff",
    fontSize: 20,
    marginLeft: 25,
    fontWeight: "bold",
  },
  bekijkBtn: {
    color: "#61CE70",
    fontWeight: "700",
    marginTop: 5,
    marginLeft: 25,
  }
});
