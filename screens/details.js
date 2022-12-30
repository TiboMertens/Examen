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
import Detail from "../components/carDetails";

const Details = ({ navigation, route }) => {
  return (
    <View>
      <Detail title={route.params.itemTitle}
      description={route.params.itemDesc}
      image={route.params.itemImage} 
      author={route.params.itemAuthor} />
    </View>
  );
};

export default Details;