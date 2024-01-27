import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { login } from "../utils/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      console.log("Attempting login...");
      await login(email, password);
      // console.log("Login successful!");
    } catch (error) {
      console.error("Login failed:", error.message);
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message={"Logging you in..."} />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
