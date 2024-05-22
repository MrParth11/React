// Home.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditBlog from './EditBlog';
import BlogDetail from './BlogDetail';

const Home = ({ blogs, setBlogs }) => {
    const fetchBlog = async (id) => {
        const blog = blogs.find((b) => b.id === parseInt(id));
        if (blog) {
            return blog;
        } else {
            throw new Error('Blog not found');
        }
    };

    const updateBlog = (id, updatedBlog) => {
        setBlogs(blogs.map((blog) => (blog.id === parseInt(id) ? { ...updatedBlog, id: parseInt(id) } : blog)));
    };

    return (
        <Router>
            <Routes>
                <Route path="/edit/:id" element={<EditBlog fetchBlog={fetchBlog} updateBlog={updateBlog} />} />
                <Route path="/blog/:id" element={<BlogDetail blogs={blogs} />} />
            </Routes>
        </Router>
    );
};

export default Home;
