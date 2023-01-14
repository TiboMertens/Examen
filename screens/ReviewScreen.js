import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const ReviewScreen = () => {
  let existingReviews = [
    {
      title: "I love F1",
      name: "Tibo Mertens",
      review:
        "This car may have a legendary driver on their team, but unfortunately, their car doesn't live up to his skills",
    },
    {
      title: "F1 is awesome",
      name: "Quintt Adam",
      review:
        "This car is extremely middle of the pack when it comes to the best car on the grid of 2022",
    },
  ];

  const [Title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [reviews, setReviews] = useState(existingReviews);

  const newTitleHandler = (enteredText) => {
    console.log(enteredText);

    setTitle(enteredText);
  };

  const newReviewHandler = (enteredText) => {
    console.log(enteredText);

    setReview(enteredText);
  };

  const newNameHandler = (enteredText) => {
    console.log(enteredText);

    setName(enteredText);
  };

  const addReviewHandler = () => {
    let newReview = { title: Title, name: name, review: review };

    let modifiedObj = {
      title: newReview.title,
      name: newReview.name,
      review: newReview.review,
    };

    setReviews((existingReviews) => [...existingReviews, modifiedObj]);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.writeText}>Write your own review:</Text>

        <TextInput
          style={styles.titleInput}
          placeholder="Title of your review"
          clearButtonMode="always"
          onChangeText={newTitleHandler}
        />
        <TextInput
          style={styles.reviewInput}
          placeholder="Your review"
          clearButtonMode="always"
          onChangeText={newReviewHandler}
          multiline
          numberOfLines={7}
        />

        <TextInput
          style={styles.nameInput}
          placeholder="Your name"
          clearButtonMode="always"
          onChangeText={newNameHandler}
        />

        <TouchableOpacity style={styles.btn} onPress={() => addReviewHandler()}>
          <Text style={styles.btnText}>Post review</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={{ height: 350, marginTop: 25 }}
        data={reviews}
        renderItem={({ item }) => (
          <View style={styles.reviewContainer}>
            <Text style={styles.reviewTitle}>{item.title}</Text>
            <Text style={styles.review}>{item.review}</Text>
            <Text style={styles.reviewName}>- {item.name}</Text>
          </View>
        )}
      />
      <Text style={styles.a}>hey</Text>
    </View>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({
  flatListContainer: {
    backgroundColor: "#353935",
  },
  container: {
    backgroundColor: "#353935",
  },
  reviewContainer: {
    backgroundColor: "#545454",
    marginBottom: 20,
    width: 365,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 4,
  },
  reviewTitle: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 20,
    marginTop: 10,
  },
  review: {
    color: "#ffffff",
    fontWeight: "400",
    fontSize: 16,
    marginLeft: 20,
    marginTop: 5,
    marginRight: 20,
  },
  reviewName: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 18,
    marginLeft: 20,
    marginTop: 5,
    marginBottom: 10,
  },
  writeText: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "bold",
    marginLeft: 25,
    marginBottom: 10,
    marginTop: 10,
  },
  titleInput: {
    backgroundColor: "#Eaf0f3",
    marginLeft: 25,
    marginRight: 25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    borderRadius: 4,
    marginBottom: 20,
  },
  reviewInput: {
    backgroundColor: "#Eaf0f3",
    marginLeft: 25,
    marginRight: 25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    borderRadius: 4,
    marginBottom: 20,
  },
  nameInput: {
    backgroundColor: "#Eaf0f3",
    marginLeft: 25,
    marginRight: 25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    borderRadius: 4,
    marginBottom: 20,
  },
  btn: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#61CE70",
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 4,
    marginBottom: 50,
  },
  btnText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },
  a: {
    color: "#353935",
  },
});
