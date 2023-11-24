// // // DOM items
// // Header items
// Login button
const LOGIN_BUTTON = document.getElementById("login-button");
// Login section
const LOGIN_SECTION = document.getElementById("login-section");
// Username input
const USERNAME_INPUT = document.getElementById("username");
// Password input
const PASSWORD_INPUT = document.getElementById("password");
// Signed in section
const SIGNED_IN_SECTION = document.getElementById("signed_in_options");
// Sign in button
const SIGN_IN_BUTTON = document.getElementById("sign_in");
// Logout button
const LOGOUT_BUTTON = document.getElementById("logout-button");

// // Main items
// Post list section
const POST_LIST = document.getElementById("post_list");
// Articles
let ALL_ARTICLES;

// // Admin items
// Admin section
const ADMIN_SECTION = document.getElementById("admin_section");
// Create post header
const CREATE_POST_TITLE = document.getElementById("create_post");
// Create post form
const CREATE_POST_FORM = document.getElementById("create_post_form");
// Create post inputs
const CREATE_POST_DAY = document.getElementById("day_input");
const CREATE_POST_CONTENT = document.getElementById("content_input");
const CREATE_POST_SUBMIT = document.getElementById("post");
// Selected post section
const SELECTED_POST = document.getElementById("selected_post_info");

// API endpoint
const apiEndpoint = "http://localhost:7171";

// //  Helper functions
// Error present check
function errorPresent() {
  // Error message text
  const ERROR_MESSAGE = document.getElementById("error_message");

  // Remove error message if present
  if (ERROR_MESSAGE !== null) {
    ERROR_MESSAGE.remove();
  }
}

// Error message
function errorMessage(text, location) {
  const message = document.createElement("p");
  message.id = "error_message";
  message.textContent = text;
  return location.appendChild(message);
}

// Load posts
function loadPosts(posts) {
  // Clear the post list
  POST_LIST.innerHTML = "";

  // Loop through the posts and create articles
  posts.map((elem) => {
    // Create article
    const article = document.createElement("article");

    // Set article ID to post ID
    article.id = elem.id;

    // Set article class
    article.className = "post_article";

    // Create title tag
    const title = document.createElement("h4");

    // Title ID
    title.id = `${elem.id}_title`

    // Set title content
    title.textContent = `Day ${elem.day} of 100:`;

    // Create post content tag
    const content = document.createElement("p");

    // Content ID
    content.id = `${elem.id}_content`

    // Set post content's content
    content.textContent = `${elem.post}`;

    // Appaend the title and content to article
    article.append(title, content);

    // Append article to the post list
    POST_LIST.appendChild(article);
  });
}

// // Login Section
// Login click event
LOGIN_BUTTON.addEventListener("click", () => {
  // Login inputs appear
  LOGIN_SECTION.style.display = "inline";

  //Log in button disappears
  LOGIN_BUTTON.style.display = "none";
});

// Login detail checker
async function userLogin(username, password) {
  // Send request for login info
  const response = await fetch(apiEndpoint + "/login", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  // Parse the response
  const data = await response.json();

  //Return the data
  return data.data;
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

  // Error handling
  errorPresent();
  if (response !== "Successful") {
    return errorMessage(response, LOGIN_SECTION);
  }

  // Signed in message and logout appear
  SIGNED_IN_SECTION.style.display = "inline";

  // Login inputs disappear
  LOGIN_SECTION.style.display = "none";

  // Admin Seciton appears
  ADMIN_SECTION.style.display = "flex";
});

// Logout click event
LOGOUT_BUTTON.addEventListener("click", () => {
  // Sign in button appears
  LOGIN_BUTTON.style.display = "inline";

  // Signout button disappears
  SIGNED_IN_SECTION.style.display = "none";

  // Admin section disappears
  ADMIN_SECTION.style.display = "none";
});

// // Post List Section
// Function to get all posts
async function getPosts() {
  // Send request to API
  const response = await fetch(apiEndpoint + "/posts");

  // Parse the response
  const data = await response.json();

  // Return the data
  return data.data;
}

// Eventt listener for the page loading
window.addEventListener("load", async () => {
  // Call fetch function and set to variable
  const posts = await getPosts();

  // Call the load postts function
  loadPosts(posts);

  // Set the new articles to the variable
  let ALL_ARTICLES = document.querySelectorAll(".post_article");

  // Call the 
  articleEvent(ALL_ARTICLES);

});

// // Admin Section
// Create post click event function
CREATE_POST_TITLE.addEventListener("click", () => {
  // Ternary operator to change create form display setting
  CREATE_POST_FORM.style.display === "none"
    ? (CREATE_POST_FORM.style.display = "flex")
    : (CREATE_POST_FORM.style.display = "none");
});

// Create a new post function
CREATE_POST_SUBMIT.addEventListener("click", async (event) => {
  // Prevent default of re-loading page
  event.preventDefault();

  // Set the input values to variables
  const day = CREATE_POST_DAY.value;
  const post = CREATE_POST_CONTENT.value;
  console.log(post);

  // Error handling
  errorPresent();
  if (day === "" || post === "") {
    const text = "Please complete all sections before postitng";
    return errorMessage(text, CREATE_POST_FORM);
  }

  // Send post request to the database
  const response = await fetch(apiEndpoint + "/posts", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      day,
      post,
    }),
  });

  // Parse the response
  const data = await response.json();

  // Error handling
  if (data.status !== "success") {
    console.error(data.data);
  }

  // Call fetch function and set to variable
  const posts = await getPosts();

  // Call the load postts function
  loadPosts(posts);

  // Reset the input values
  CREATE_POST_DAY.value = "";
  CREATE_POST_CONTENT.value = "";
});

console.log(ALL_ARTICLES)
function articleEvent (nodes) {
// Selected post function - function performed on each article
nodes.forEach((elem) => {
    // Event listener for each article
    elem.addEventListener("click", () => {
        // Clear the selected post div
        SELECTED_POST.innerHTML = "";

        // Set the childen to variables
        const TITLE = document.getElementById(`${elem.id}_title`);
        const CONTENT = document.getElementById(`${elem.id}_content`);

        // Create title
        const title = document.createElement("h4");
        title.textContent = TITLE.textContent;

        // Create content
        const content = document.createElement("p");
        content.textContent = CONTENT.textContent;

        // Create ID
        const postID = document.createElement("p");
        postID.id = "id";
        postID.textContent = `ID: ${elem.id}`;

        // Append the elements
        SELECTED_POST.append(title, content, postID);
    })
})
}
