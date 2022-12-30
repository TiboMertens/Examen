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

const Detail = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
      <Text>{props.description}</Text>
      <Image
        style={{ width: 420, height: 200 }}
        source={{ uri: `${props.image}` }}
      />
    </View>
  );
};

export default Detail;
