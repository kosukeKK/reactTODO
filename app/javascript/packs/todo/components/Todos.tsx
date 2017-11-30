import * as React from 'react';
import { connect } from 'react-redux';
import { addTodo, todosStatusFilter } from '../actions';
import VisibleTodoList from '../components/VisibleTodoList'

const Todos = (that: any) => {
    let input: any;
    return (
        <div>
            <input type='text' ref={(node) => { input = node; }} />
            <button onClick={() => clickAddTodo(that.dispatch, input)}>Add</button><br />
            <button onClick={() => that.dispatch(todosStatusFilter('SHOW_ALL'))}>SHOW ALL</button>
            <button onClick={() => that.dispatch(todosStatusFilter('SHOW_COMPLETED'))}>SHOW COMPLETED</button>
            <button onClick={() => that.dispatch(todosStatusFilter('SHOW_ACTIVE'))}>SHOW ACTIVE</button><br />
            <VisibleTodoList />
        </div>
    );
};

const clickAddTodo = (dispatch: any, input: any) => {
    if (input.value === '') { return; }
    dispatch(addTodo(input.value));
    input.value = '';
};

const mapStateToProps = (state: number) => {
    return { state };
};



export default connect(mapStateToProps)(Todos);
