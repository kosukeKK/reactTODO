import * as React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions';

const App = (that: any) => {
    let input: any;
    return(
    <div>
        <input type='text' ref={(node) => {input = node; }}/>
        <button onClick={() => clickAddTodo(that.dispatch, input)}>Add</button>
        <ul>
            {todoList(that.dispatch, that.state.todos)}
        </ul>
    </div>
    );
};

const clickAddTodo = (dispatch: any, input: any) => {
    if (input.value === '') {return; }
    dispatch(addTodo(input.value));
    input.value = '';
};

const mapStateToProps = (state: number) => {
    return { state };
};

const todoList = (dispatch: any, todos: Array<any>) => {
    let list: Array<any> = [];
    if (todos.length === 0) {return ''; }
    for (let todo of todos) {
        list.push(<li key={todo.id.toString()} onClick={() => dispatch(toggleTodo(todo.id))} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}</li>);
    }
    return list;
};

export default connect(mapStateToProps)(App);