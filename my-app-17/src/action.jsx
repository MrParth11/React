// src/actions.js
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
});

export const editTodo = (index, updates) => ({
    type: EDIT_TODO,
    payload: {
        index,
        updates
    }
});

export const removeTodo = (index) => ({
    type: REMOVE_TODO,
    payload: index
});
