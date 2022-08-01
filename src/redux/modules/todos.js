// Action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const CHANGE_TODO = "CHANGE_TODO";

// Action Creator
export const addTodo = (add) => {
    return { 
        type: ADD_TODO, 
        add,
     };
};

export const DeliteTodo = (deliteId) => {
    return { 
        type: DELETE_TODO, 
        deliteId,
     };
};

export const ChangeTodo = (changeId) => {
    return { 
        type: CHANGE_TODO, 
        changeId,
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
                todos: [...state.todos, action.add],
            };
        case DELETE_TODO:
        const new_todos = state.todos.filter((l)=> {
            return action.deliteId !== l.id;
        })
            return {todos: new_todos};

        case CHANGE_TODO:
            const change = action.changeId.isDone === false ? action.changeId.isDone=true : action.changeId.isDone=false;
            return { todos: [...state.todos, change] };

        default:
            return state;
    }
};

export default todos;
