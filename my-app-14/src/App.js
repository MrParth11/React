// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BlogDetail from './components/BlogDetail';
import EditBlog from './components/EditBlog';

const App = () => {
    const [blogs, setBlogs] = useState([
        { id: 1, title: 'Sample Blog Title 1', content: 'Sample blog content 1.' },
        { id: 2, title: 'Sample Blog Title 2', content: 'Sample blog content 2.' }
    ]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home blogs={blogs} setBlogs={setBlogs} />} />
                <Route path="/blog/:id" element={<BlogDetail blogs={blogs} />} />
                <Route path="/edit/:id" element={<EditBlog blogs={blogs} setBlogs={setBlogs} />} />
            </Routes>
        </Router>
    );
};

export default App;
