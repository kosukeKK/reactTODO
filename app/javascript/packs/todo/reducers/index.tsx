import { combineReducers } from 'redux';
import { todos, visibilityFilter } from '../reducers/todos';
const todosReducer = combineReducers({ todos, visibilityFilter });
export default todosReducer;
