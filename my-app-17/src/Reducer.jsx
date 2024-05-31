// src/reducer.js
import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from './action';

const initialState = {
    todos: []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((_, index) => index !== action.payload)
            };
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) => 
                    index === action.payload.index
                        ? { ...todo, ...action.payload.updates }
                        : todo
                )
            };
        default:
            return state;
    }
};

export default todoReducer;
