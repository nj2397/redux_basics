import { createStore } from 'redux';
import counterReducers from './reducers';

const store = createStore(counterReducers);

export default store;
