// Blog_setup_model.js
const mongoose = require('mongoose');

// Define the schema for the Blog
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: String,  // Store the file paths of uploaded images
  },
}, {
  timestamps: true,  // Automatically adds createdAt and updatedAt fields
});

const Blog = mongoose.model('blogs', blogSchema);

module.exports = Blog;

