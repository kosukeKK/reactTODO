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
            if (state.id !== action.id) return state;
            return Object.assign({}, state, {
                completed: !state.completed
            });
        default:
            return state;
    }
};

export const todos = (state = initialState, action: any) => {
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

export const visibilityFilter = (state = 'SHOW_ALL', action: any) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}
