import { createContext, useState } from "react";

const AuthContent = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
});

function AuthContentProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function authenticate(token) {
    setAuthToken(token);
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
  return <AuthContent.Provider value={value}>{children}</AuthContent.Provider>;
}
export default AuthContentProvider;
