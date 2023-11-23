// // DOM items
// Login button
const LOGIN_BUTTON = document.getElementById("login-button");
// Login section
const LOGIN_SECTION = document.getElementById("login-section");
// Username input
const USERNAME_INPUT = document.getElementById("username");
// Password input
const PASSWORD_INPUT = document.getElementById("password");
// Signed in section
const SIGNED_IN_SECTION = document.getElementById("signed_in_options")
// Sign in button
const SIGN_IN_BUTTON = document.getElementById("sign_in");
// Logout button
const LOGOUT_BUTTON = document.getElementById("logout-button");
// Admin section
const ADMIN_SECTION = document.getElementById("admin_section");

const apiEndpoint = "http://localhost:7171";

// // Login Section
// Login click event
LOGIN_BUTTON.addEventListener("click", () => {
    // Login inputs appear
    LOGIN_SECTION.style.display = "inline";

    //Log in button disappears
    LOGIN_BUTTON.style.display = "none";
})

// Login detail checker
async function userLogin (username, password) {
    // Send request for login info
    const response = await fetch(apiEndpoint + "/login", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
            username,
            password,
        })
    });

    // Parse the response
    const data = await response.json();

    return data.data
}

// Sign in event
SIGN_IN_BUTTON.addEventListener("click", async (event) => {
    // Prevent the form from reloading the page
    event.preventDefault();

    // Username and password variables
    const username = USERNAME_INPUT.value;
    const password = PASSWORD_INPUT.value;

    // Send the user information to the database
    const response = await userLogin(username, password);

    // Error Handling for incorrect details
    if (response !== "Successful") {
        const message = document.createElement("p");
        message.id = "error_message"
        message.textContent = response;
        return LOGIN_SECTION.appendChild(message);
    }

    // Signed in message and logout appear
    SIGNED_IN_SECTION.style.display = "inline";

    // Login inputs disappear
    LOGIN_SECTION.style.display = "none";

    // Admin Seciton appears
    ADMIN_SECTION.style.display = "flex";
})

// Logout click event
LOGOUT_BUTTON.addEventListener("click", () => {
    // Sign in button appears
    LOGIN_BUTTON.style.display = "inline";

    // Signout button disappears
    SIGNED_IN_SECTION.style.display = "none";

    // Admin section disappears
    ADMIN_SECTION.style.display = "none";
})
