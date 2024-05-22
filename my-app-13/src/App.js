import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import PostList from './PostList';
import WritePost from './WritePost';
import Navbar from './Navbar';
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/write" element={<WritePost />} />
      </Routes>
    </Router>
  );
}

export default App;
