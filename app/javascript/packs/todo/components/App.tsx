import * as React from 'react';
import { connect } from 'react-redux';
import { helloAction } from '../actions';

const App = (that: any) => (
    <div>
        <input type='text'></input>
        <button onClick={() => that.dispatch(helloAction('text'))} />
        <ul>
            {todoList(that.state.todos)}
        </ul>
    </div>
);

const mapStateToProps = (state: number) => {
    return { state };
};

const todoList = (todos: Array<any>) => {
    let list: Array<any> = [];
    if (todos.length === 0) {return 'Hello World'; }
    for (let i = 0; i < todos.length; i++) {
        list.push(<li key={todos[i].id.toString()}>{todos[i].text}</li>);
    }
    return list;
};

export default connect(mapStateToProps)(App);