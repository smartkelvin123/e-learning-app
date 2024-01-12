import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Colors from "../Utilis/Colors";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../../assets/image/download learning image 1.jpeg")}
          style={{ width: 500, height: 500, resizeMode: "contain" }}
        />
      </View>

      <View
        style={{
          height: 400,
          backgroundColor: Colors.primary,
          width: "100%",
          marginTop: -100,
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: Colors.white,
            fontSize: 35,
            fontFamily: "outfit-bold",
            marginTop: 20,
          }}
        >
          CODE BOX
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: Colors.light,
            fontSize: 20,
            marginTop: 20,
            fontFamily: "outfit",
          }}
        >
          Your ultimate programming learning box
        </Text>
        <View
          style={{
            backgroundColor: Colors.white,
            justifyContent: "center",
            flexDirection: "row",
            padding: 10,
            marginTop: 50,
            borderRadius: 11,
            display: "flex",
          }}
        >
          <Pressable 
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              display: " flex",
            }}
          >
            <Image
              source={require("../../assets/image/google icon.png")}
              style={{
                width: 50,
                height: 50,
                resizeMode: "contain",
                marginRight: 10,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                color: Colors.primary,
                marginLeft: 10,
                display: "flex",
                fontFamily: "outfit",
                justifyContent: "center"
              }}
            >
              sign in with google
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoginScreen;
