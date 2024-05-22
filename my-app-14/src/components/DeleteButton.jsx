import React from 'react';

const DeleteButton = ({ onDelete }) => {
    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            onDelete();
        }
    };

    return (
        <button onClick={handleDelete}>Delete</button>
    );
};

export default DeleteButton;