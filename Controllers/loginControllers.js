// // Imports
// Import model functions
import getLogin from "../Models/loginModels.js";

// GET function
export default async function getLogins(req, res) {
  // Call the model function and set to a variable
  const loginInfo = await getLogin();
  console.log("Login info from database", loginInfo)

  // Set the body to a variable
  const userDetails = req.body;
  console.log("User info in controller function:", userDetails)

  // Comparison
  let message =
    loginInfo[0].username !== userDetails.username
      ? "Username incorrect"
      : loginInfo[0].password !== userDetails.password
      ? "Password incorrect"
      : "Successful";

  // Set the info to a response with status 200
  // res.status(200).json({ status: "success", data: message });
  return { status: "success", data: message }
}
