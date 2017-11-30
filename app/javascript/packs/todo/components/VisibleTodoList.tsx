import * as React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

const VisibleTodoList = (that: any) => {
    return (
        <div>
            <ul>
                {todoList(that.dispatch, that.todos)}
            </ul>
        </div>
    )
};

const getVisibleTodos = (that: any) => {
    switch (that.visibilityFilter) {
        case 'SHOW_ALL':
            return that.todos;
        case 'SHOW_COMPLETED':
            return that.todos.filter((t: any) => t.completed);
        case 'SHOW_ACTIVE':
            return that.todos.filter((t: any) => !t.completed);
        default:
            return that.todos;
    }
}

const mapStateToProps = (state: any) => {
    if (state.length === 0) { return state; }
    let todos = getVisibleTodos(state);
    return { todos }
}

const todoList = (dispatch: any, todos: Array<any>) => {
    let list: Array<any> = [];
    if (todos.length === 0) { return ''; }
    for (let todo of todos) {
        list.push(<li key={todo.id.toString()} onClick={() => dispatch(toggleTodo(todo.id))} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</li>);
    }
    return list;
};

export default connect(mapStateToProps)(VisibleTodoList);
