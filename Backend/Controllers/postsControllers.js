// // Imports
// Import model functions
// import * as postsModels from "../Models/postsModels.js"

// // Controller functions
// Get function
export async function getPosts(req, res) {
  // Call the models get function and set to a variable
  const posts = await postsModels.getPosts();

  // Set response status to 200 for success and the response json to an object containing status and data(posts)
  res.status(200).json({ status: "success", data: posts });
}

// Post function
export async function createPost(req, res) {
  // Set a variable to the request body object
  const postData = req.body;

  // Call the model create function using the new data and set to a variable
  const newPost = await postsModels.createPost(postData);

  // Set the response status to 201 for created and the response json to contain new post
  res.status(201).json({ status: "success", data: newPost });
}

// Patch function
export async function updatePostById(req, res) {
  // Set a variable to the id of the post to be updated
  const postId = req.params.id;

  // Set a variable containing the updated information
  const updateData = req.body;

  // Call the model update function using the update data
  const updatedPost = await postsModels.updatePostById(postId, updateData);

  // Error handling for situation where id is not found
  if (!updatedPost) {
    return res
      .status(404)
      .json({ status: "failed", data: "ID of post not found" });
  }

  // Set the response status to 200 and the json to contian updated post
  res.status(200).json({ status: "success", data: updatedPost });
}

// Delete function
export async function deletePostById(req, res) {
  // Set the id to a variable
  const postId = req.params.id;

  // Call the model delete function using the id
  const deletedPost = await postsModels.deletePostById(id);

  // Error handling for situation where id is not found
  if (!deletedPost) {
    return res
      .status(404)
      .json({ status: "failed", data: "ID of post not found" });
  }

  // Set the response status to 200 and the deleted post in the json
  res.status(200).json({status: "success", data: deletedPost});
}
