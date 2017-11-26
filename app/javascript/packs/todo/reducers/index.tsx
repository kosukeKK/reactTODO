import { combineReducers } from 'redux';

let initialState: Array<any> = [];

const todo = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text
            };
        default:
            return state;
    }
};


const todos = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        default:
            return state;
    }
};
const todosReducer = combineReducers({ todos });
export default todosReducer;