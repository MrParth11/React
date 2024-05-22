import React from 'react';
import { Link } from 'react-router-dom';

const PostList = () => {
  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        <li><Link to="/posts/1">Post 1</Link></li>
        <li><Link to="/posts/2">Post 2</Link></li>
        {/* Render a list of blog posts */}
      </ul>
    </div>
  );
}

export default PostList;
