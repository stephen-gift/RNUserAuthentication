import { Alert } from "react-native";

const API_KEY = "AIzaSyCSGuYWsXbREZv7pGnDJMkrawiw-ClzCJk";
async function authenticate(mode, email, password) {
  const URL = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      // Signup / Login successful
      console.log(data);
      const token = data.idToken;
      return token;
    } else {
      // Handle signup / Login error
      console.error("Firebase authentication error:", data.error);
      Alert.alert("Authentication failed!", `${data.error.message}`);
    }
  } catch (error) {
    console.error("Fetch error:", error.message);
    Alert.alert("Error Fetching data:", `${error.message}`);
  }
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}
export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
