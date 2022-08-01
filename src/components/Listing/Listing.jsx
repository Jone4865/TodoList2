import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { DeliteTodo, ChangeTodo } from "../../redux/modules/todos";
import { Link, useParams } from 'react-router-dom'


const Listing = () => {
    const { todos } = useSelector((state) => state.todos);
    const Delite = useDispatch();
    const Change = useDispatch();
    
    return (
        <div>
            <Title>열심히 하는 중...!</Title>
            <TodosBody>
                {todos.map((todo) => (
                    todo.isDone === false ?
                        <TodoBody key={todo.id} id={todo.id}>
                            <h4>상세페이지...</h4>
                            <h5>{todo.title}</h5>
                            <div>{todo.text}</div>
                            <button  onClick={() => {
                                Change(ChangeTodo(todo))
                            }}>완료하기</button>
                            <button onClick={() => {
                                Delite(DeliteTodo(todo.id))
                            }}>삭제</button>
                        </TodoBody> :
                        ''
                ))}
            </TodosBody>
            <Title>완료...!</Title>
            <TodosBody>
                {todos.map((todo) => (
                    todo.isDone === true ?
                        <TodoBody key={todo.id}>
                            <h4>상세페이지...</h4>
                            <h5>{todo.title}</h5>
                            <div>{todo.text}</div>
                            <button onClick={() => {
                                Change(ChangeTodo(todo))
                            }}>취소하기</button>
                            <button onClick={() => {
                                Delite(DeliteTodo(todo.id))
                            }}>삭제</button>
                        </TodoBody> :
                        ''
                ))}
            </TodosBody>
        </div>
    );
};

export default Listing;

const TodosBody = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  gap: 12px;
  white-space:nowrap;
  overflow-x: scroll;
  h4 {
    font-size: 6px;
  }
`;

const TodoBody = styled.div`
    width: 20%;
    max-width: 20%;
    min-width: 250px;
    height: 150px;
    border: 3px solid yellow;
    justify-content: space-between;
    align-items: center;
    margin: 0px auto 10px auto;
    margin-top: 20px;
    border-radius: 10px;
    padding: 8px;
    background-color: #aee5f769;
    white-space: normal;
    button {
        border: 0px solid;
        border-radius: 3px;
        margin-left: 10px;
        margin-top: 15px;
        background-color: #d0f2ca;
    }
`;

const Title = styled.h3`
    width: 100%;
    background-color: #ff000010;
    max-width: 1200px;
    margin: 10px auto 0px auto;
    padding: 5px;
    border-radius: 10px;
  `