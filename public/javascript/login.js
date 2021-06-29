async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.getElementById("username-login").value;
  const password = document.getElementById("password-login").value;

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.getElementById("username-login").value;
  const password = document.getElementById("password-login").value;

  if (username && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    // check the response status
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .getElementById("login-btn")
  .addEventListener("click", loginFormHandler);

document
  .getElementById("signup-btn")
  .addEventListener("click", signupFormHandler);
