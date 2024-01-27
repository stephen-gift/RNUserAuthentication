import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your App Name</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff", // Set your desired background color
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000", // Set your desired text color
  },
});

export default SplashScreen;
