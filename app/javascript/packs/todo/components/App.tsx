import * as React from 'react';
import { connect } from 'react-redux';
import Todos from '../components/Todos';

const App = () => {
    return (
        <div>
            <Todos />
        </div>
    );
};


export default connect()(App);