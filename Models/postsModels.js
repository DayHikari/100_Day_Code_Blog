// // Imports
// Import pool from index
import {pool} from "../Database/index.js";


// Get all posts function
export async function getPosts() {
    //Set the database request to a variable
    const queryText = `SELECT * FROM posts ORDER BY id DESC;`;

    //Send the query to the database using pool and assign the response to a variable
    const data = await pool.query(queryText);

    // Return the data
    return data.rows;
}

// Create new post function
export async function createPost(postData) {
    // Set the database request to a variable
    const queryText = `INSERT INTO posts (day, post) VALUES ($1, $2) RETURNING *;`;

    // Send the query text to the database with the postData in an array to prevent injection
    const data = await pool.query(queryText, [postData.day, postData.post]);

    // Return the data
    return data.rows;
}

// Update post by ID function
export async function updatePostById(postId, postData) {
    // Get the post details by ID
    const getQueryText = `SELECT * FROM posts WHERE id = $1 ORDER BY id DESC;`

    // Send the request for the post
    const selectedPost = await pool.query(getQueryText, [postId]);

    // Set the edited data or current data to variable
    const day = postData.day ?? selectedPost.rows[0].day;
    const post = postData.post ?? selectedPost.rows[0].post;

    // Set the query text to update the posts by setting the day and post to either the new data or the original if not present when id matches
    const queryText = `UPDATE posts SET day = COALESCE($1, day), post = COALESCE($2, post) WHERE id=$3 RETURNING *;`;

    // Send the request and set return to a variable
    const data = await pool.query(queryText, [day, post, postId]);

    // Return the data
    return data.rows[0] || null;
}

// Delete post by ID function
export async function deletePostById(postId) {
    //Set the query text to delete a post by ID  
    const queryText = `DELETE FROM posts WHERE id = $1 RETURNING *;`;

    // Send the request and set the return to a variable
    const data = await pool.query(queryText, [postId]);

    // Return the data
    return data.rows[0] || null;
}