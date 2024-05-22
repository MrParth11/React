// BlogDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = ({ blogs }) => {
    const { id } = useParams();
    const blog = blogs.find(blog => blog.id === parseInt(id));

    if (!blog) {
        return <p>Blog not found</p>;
    }

    return (
        <div>
            <h1>Blog Detail</h1>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <p>ID: {blog.id}</p>
        </div>
    );
};

export default BlogDetail;
