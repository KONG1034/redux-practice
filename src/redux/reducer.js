import {addToDo,deleteToDo} from './action';

const initialState = {
    todos: []
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case addToDo: {
            return [...state.todos, action.todo];
        }
        case deleteToDo: {
            return [...state.todos.filter((todo) => todo.id !== action.id)];
        }
        default: {
            return state;
        }
    }
}