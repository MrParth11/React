import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  let { id } = useParams();

  return (
    <div>
      <h2>Blog Post {id}</h2>
      {/* Display the content of the blog post */}
    </div>
  );
}

export default Post;
