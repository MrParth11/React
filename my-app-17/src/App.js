// src/App.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, editTodo, removeTodo } from './action';
import './App.css';

function App() {
    const [task, setTask] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editTask, setEditTask] = useState('');
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (task.trim()) {
            dispatch(addTodo({ text: task, completed: false }));
            setTask('');
        }
    };

    const handleEditTodo = (index, todo) => {
        setEditIndex(index);
        setEditTask(todo.text);
    };

    const handleSaveEditTodo = (index) => {
        if (editTask.trim()) {
            dispatch(editTodo(index, { text: editTask }));
            setEditIndex(null);
            setEditTask('');
        }
    };

    const handleRemoveTodo = (index) => {
        dispatch(removeTodo(index));
    };

    return (
        <div className="app">
            <h1>To-Do App</h1>
            <div className="todo-input">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter a task"
                />
                <button onClick={handleAddTodo}>Add Task</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={index}>
                        {editIndex === index ? (
                            <div>
                                <input
                                    type="text"
                                    value={editTask}
                                    onChange={(e) => setEditTask(e.target.value)}
                                />
                                <button onClick={() => handleSaveEditTodo(index)}>Save</button>
                            </div>
                        ) : (
                            <div>
                                {todo.text}
                                <button onClick={() => handleEditTodo(index, todo)}>Edit</button>
                                <button onClick={() => handleRemoveTodo(index)}>Remove</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
