import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
});

function AuthContentProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function fetchToken() {
      const sharedToken = await AsyncStorage.getItem("token");
      if (sharedToken) {
        setAuthToken(sharedToken);
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
    // setIsAuthenticated(false);
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthContentProvider;
