// // Imports
// Import model functions
import getLogin from "../Models/loginModels.js";

// GET function
export default async function getLogins(req, res) {
    // Call the model function and set to a variable
    const loginInfo = await getLogin();

    // Set the info to a response with status 200
    res.status(200).json({status: "success", data: loginInfo});
}