let nextId = 0;
export const addTodo = (text: string) => {
    return { type: 'ADD_TODO', id: nextId++, text };
};

export const toggleTodo = (id: number) => {
    return { type: 'TOGGLE_TODO', id};
};