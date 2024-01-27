import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { fetchData } from "../utils/auth";
import { AuthContext } from "../store/authContext";import AsyncStorage from "@react-native-async-storage/async-storage";


function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState(null);
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchData(token);
        setFetchedMessage(data);
      } catch (error) {}
    };
    fetchDataAsync();
  }, [token]);

  // useEffect(() => {
  //   async function fetchToken() {
  //     try {
  //       const storedToken = await AsyncStorage.getItem("token");
  
  //       // Check if the token is still valid or if it should be cleared
  //       if (storedToken && isValidToken(storedToken)) {
  //         setAuthToken(storedToken);
  //       } else {
  //         setAuthToken(""); // Clear the token state
  //         AsyncStorage.removeItem("token"); // Remove the invalid token from AsyncStorage
  //       }
  //     } catch (error) {
  //       console.error('Error fetching token:', error.message);
  //       // Handle error, e.g., set an error state
  //     }
  //   }
  
  //   fetchToken();
  // }, []);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage} </Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
