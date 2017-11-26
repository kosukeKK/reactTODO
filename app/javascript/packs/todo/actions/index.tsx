let nextId = 0;
export const helloAction = (text: string) => {
    return { type: 'ADD_TODO', id: nextId++, text };
};
