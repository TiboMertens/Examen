import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Image,
  Pressable,
  TabBarIOSItem,
} from "react-native";
import React, { useState, useEffect } from "react";

const searchFilter = ({ navigation, data, input, setInput }) => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((currentCounter) => currentCounter + 1);
  };

  return (
    <View>
      <Pressable
        onPress={() =>
          navigation.navigate("ShoppingCart", {
          })
        }
      >
        <View style={styles.shoppingCart}>
          <Image
            style={styles.icon}
            source={require("../assets/shoppingCart.png")}
          />
          <Text style={styles.shoppingCartAmount}>{counter}</Text>
        </View>
      </Pressable>

      <FlatList
        style={styles.list}
        ListFooterComponent={<View style={{ height: 300 }}></View>}
        data={data}
        renderItem={({ item }) => {
          if (input === "") {
            return (
              <View style={styles.Container}>
                <View style={styles.carsContainer}>
                  {item.yoast_head_json?.og_image !== undefined && (
                    <Image
                      style={styles.image}
                      source={{
                        uri: `${item.yoast_head_json.og_image[0].url}`,
                      }}
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
                    <View style={styles.buttonsContainer}>
                      <Text style={styles.bekijkBtn}>bekijk product</Text>
                      <Pressable onPress={increase}>
                        <Text style={styles.cartBtn}>Add to cart</Text>
                      </Pressable>
                    </View>
                  </Pressable>
                </View>
              </View>
            );
          }

          if (item.title.rendered.toLowerCase().includes(input.toLowerCase())) {
            return (
              <View style={styles.Container}>
                <View style={styles.carsContainer}>
                  {item.yoast_head_json?.og_image !== undefined && (
                    <Image
                      style={styles.image}
                      source={{
                        uri: `${item.yoast_head_json.og_image[0].url}`,
                      }}
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
                    <View style={styles.buttonsContainer}>
                      <Text style={styles.bekijkBtn}>bekijk product</Text>
                      <Pressable onPress={increase}>
                        <Text style={styles.cartBtn}>Add to cart</Text>
                      </Pressable>
                    </View>
                  </Pressable>
                </View>
              </View>
            );
          }
        }}
      ></FlatList>
    </View>
  );
};

export default searchFilter;

const styles = StyleSheet.create({
  shoppingCartAmount: {
    color: "#ffffff",
    fontWeight: "bold",
    marginLeft: 27,
    position: "relative",
    bottom: 7,
  },
  icon: {
    width: 25,
    height: 25,
  },
  shoppingCart: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 200,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 3,
  },
  list: {
    marginTop: 5,
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
    marginRight: 138,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
  },
  cartBtn: {
    color: "#ffffff",
    marginTop: 5,
  },
});
