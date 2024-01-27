import { createContext, useState } from "react";

export const AuthContext = createContext({
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
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthContentProvider;
