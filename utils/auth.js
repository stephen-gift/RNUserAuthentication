export async function createUser(email, password) {
  const API_KEY = "AIzaSyCSGuYWsXbREZv7pGnDJMkrawiw-ClzCJk";
  const SIGNUP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
  try {
    const response = await fetch(SIGNUP_URL, {
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
      // Signup successful
      console.log(data);
    } else {
      // Handle signup error
      console.error(data.error);
    }
  } catch (error) {
    console.error(error);
  }
}
