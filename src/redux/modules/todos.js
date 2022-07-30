// Action value
const ADD_TODO = "ADD_TODO";

// Action Creator
export const addTodo = (payload) => {
    return { 
        type: ADD_TODO, 
        payload,
     };
};

// initial State
const initialState = {
    todos: [
        {
            id: 1,
            title: "react를 배워봅시다.",
            text: "zz",
            isDone: false,
        },
        {
            id: 2,
            title: "redux를 배워봅시다.",
            text : "gg",
            isDone: true,
        },
    ],
};

// Reducer
const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        default:
            return state;
    }
};

export default todos;