const ADD = 'ADD';
const DELETE = 'DELETE';
const id = 0;

export const addToDo = (todo) => {
    return {
        type: ADD,
        todo,
        id: id++
    }
}
export const deleteToDo = (id) => {
    return {
        type: DELETE,
        id
    }
}