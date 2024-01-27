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
    } else {
      // Handle signup / Login error
      console.error(data.error);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function createUser(email, password) {
  await authenticate("signUp", email, password);
}
export async function login(email, password) {
  await authenticate("signInWithPassword", email, password);
}