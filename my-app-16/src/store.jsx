// redux/store.js
import { createStore } from 'redux';
import CounterReducer from './Reducer'; // Ensure this path is correct

const store = createStore(CounterReducer);

export default store;
