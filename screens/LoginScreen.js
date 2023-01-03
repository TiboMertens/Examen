import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  Pressable,
} from "react-native";
import React, { useState } from "react";

const LoginScreen = ({ navigation }) => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const checkForm = () => {
    if (!inputEmail.includes("@")) {
      Alert.alert("Invalid email", "Please check if there is an '@' present", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel preessed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK pressed") },
      ]);
    } else if (inputPassword !== "examen") {
      Alert.alert("Invalid Password", "Tip: lees de STIJNREADME.txt file", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel preessed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK pressed") },
      ]);
    } else {
      navigation.navigate("Cars");
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.logoText}>Buy old F1 models!</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.email}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={inputEmail}
          onChangeText={(textEmail) => setInputEmail(textEmail)}
        />
        <TextInput
          style={styles.password}
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          value={inputPassword}
          onChangeText={(textPassword) => setInputPassword(textPassword)}
        />
          <TouchableOpacity style={styles.btn} onPress={() => checkForm()}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#353935",
    flex: 1,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 260,
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    position: "relative",
    bottom: 20,
  },
  email: {
    backgroundColor: "#Eaf0f3",
    marginLeft: 25,
    marginRight: 25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    borderRadius: 4,
    marginBottom: 20,
  },
  password: {
    backgroundColor: "#Eaf0f3",
    marginLeft: 25,
    marginRight: 25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    borderRadius: 4,
  },
  btn: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#61CE70",
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    borderRadius: 4,
  },
  btnText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
