import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    outfit: require("./assets/fonts/Outfit-Black.ttf"),
    "Outfit-Bold": require("./assets/fonts/Outfit-Bold.ttf"),
    "Outfit-ExtraLight": require("./assets/fonts/Outfit-ExtraLight.ttf"),
    "Outfit-Medium": require("./assets/fonts/Outfit-Medium.ttf"),
  });

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "outfit" }}>
        Open up App.js to start working on your app!
      </Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
