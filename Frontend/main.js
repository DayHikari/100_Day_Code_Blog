// // DOM items
// Login button
const LOGIN_BUTTON = document.getElementById("login-button");
// Login section
const LOGIN_SECTION = document.getElementById("login-section");
// Username input
const USERNAME_INPUT = document.getElementById("username");
// Password input
const PASSWORD_INPUT = document.getElementById("password");
// Sign in button
const SIGN_IN_BUTTON = document.getElementById("sign_in");
// Logout button
const LOGOUT_BUTTON = document.getElementById("logout-button");


// // Login Section
// Login click event
LOGIN_BUTTON.addEventListener("click", () => {
    LOGIN_SECTION.style.display = "inline";
    LOGIN_BUTTON.style.display = "none";
})

// Login function
userLogin = (username, password) => {
    const response = await fetch(/login)
}