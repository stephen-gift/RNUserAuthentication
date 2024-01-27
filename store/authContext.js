import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
});

function AuthContentProvider({ children }) {
  const [authToken, setAuthToken] = useState("");
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        setAuthToken(storedToken);
      }
    }
    fetchToken();
  }, []);

  function authenticate(token) {
    setAuthToken(token);
    AsyncStorage.setItem("token", token);
    // setIsAuthenticated(true);
  }
  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem("token");
    // setIsAuthenticated(false);
  }

  useEffect(() => {
    async function fetchToken() {
      try {
        const storedToken = await AsyncStorage.getItem("token");

        // Check if the token is still valid or if it should be cleared
        if (storedToken) {
          setAuthToken(storedToken);
        } else {
          setAuthToken(""); // Clear the token state
          AsyncStorage.removeItem("token"); // Remove the invalid token from AsyncStorage
        }
      } catch (error) {
        console.error("Error fetching token:", error.message);
        // Handle error, e.g., set an error state
      }
    }

    fetchToken();
  }, []);

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthContentProvider;
