import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Listing = () => {
    const { todos } = useSelector((state) => state.todos);
    return (
        <div>
            <TodosBody>
                {todos.map((todo) => (
                    todo.isDone === false ?
                        <TodoBody key={todo.id}>
                            {todo.title}
                            {todo.text}
                            <button>{todo.isDone === false ? "완료하기" : "취소하기"}</button>
                            <button>삭제</button>
                        </TodoBody> :
                        ''
                ))}
            </TodosBody>
            <TodosBody>
                {todos.map((todo) => (
                    todo.isDone === true ?
                        <TodoBody key={todo.id}>
                            {todo.title}
                            {todo.text}
                            <button>{todo.isDone === false ? "완료하기" : "취소하기"}</button>
                            <button>삭제</button>
                        </TodoBody> :
                        ''
                ))}
            </TodosBody>
        </div>
    );
};

export default Listing;

const TodosBody = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;
const TodoBody = styled.div`
  width: 20%;
    max-width: 20%;
    height: 150px;
    border: 3px solid yellow;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    margin-top: 20px;
    border-radius: 10px;
    padding: 10px;
    background-color: #aee5f769;
    button {
        border: 0px solid;
        border-radius: 3px;
        margin-left: 3px;
        margin-top: 10px;
        background-color: #d0f2ca;
    }
`;