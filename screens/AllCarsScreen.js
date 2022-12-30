import React, { useState, useEffect } from "react";
import {
  Stylesheet,
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
    <View>
      <FlatList
        data={Cars}
        renderItem={({ item }) => (
          <View>
            <Text>
              {item.yoast_head_json?.og_image !== undefined && (
                <Image
                  style={{ width: 420, height: 200 }}
                  source={{ uri: `${item.yoast_head_json.og_image[0].url}` }}
                />
              )}
              <Text>
              {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
                {item.title.rendered} {"\n"}{" "}
              </Text>
             
            </Text>
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
              <Text>bekijk product</Text>
            </Pressable>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default Cars;