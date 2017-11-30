import { combineReducers } from 'redux';

let initialState: Array<any> = [];

const todo = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                complited: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {
                completed: !state.completed
            });
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
        case 'TOGGLE_TODO':
            return state.map((t) => todo(t, action))
        default:
            return state;
    }
};

const todosReducer = combineReducers({ todos });
export default todosReducer;