import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { fetchData } from "../utils/auth";
import { AuthContext } from "../store/authContext";

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
