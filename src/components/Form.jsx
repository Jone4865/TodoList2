import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";

const Form = () => {

    //타이틀에 초기값을 준다
    const [title, setTitle] = useState("");

    //텍스트에 초기값을 준다
    const [text, setText] = useState("");

    //디스패치 사용을 선언한다.
    const dispatch = useDispatch();

    //todos로 사용하기 편하게 만들어준다.
    const todos = useSelector((state) => state.todos.todos);
    
    //폼에서 정보를 보낼때 발생하는 이벤트를 만든다. 
    //addTodo라는 액션에 정보를 넣어 디스패치 해준다.
    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(
            addTodo({
                id: todos.length + 1,
                title,
                text,
                isDone: false,
            })
        );
    };

    return (
        <Formbody>
            <form onSubmit={onSubmitHandler}>
                <div>
                    제목 <input
                        type="text"
                        // 온체인지가 발생하면 타겟의 value를 타이틀에 넣는다.
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />
                </div>
                <div>
                    내용 <input
                        type="text"
                        // 온체인지가 발생하면 타겟의 value를 타이틀에 넣는다.
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                    />
                </div>
                <button>추가하기</button>
            </form>
        </Formbody>
    );
};

export default Form;

const Formbody = styled.div`
    width: 90%;
    max-width: 400px;
    display:flex;
    border: 0px solid green;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    margin-top: 10px;
    border-radius: 10px;
    padding: 10px;
    background-color: #c5c5b991;
  input {
    width: 80%;
    max-width: 800px;
    min-width: 300px;
    border-radius:5px;
    border: 0px solid;
    padding:5px;
    background-color: #f8f8f8;
    margin: 10px;
  }
  button {
    height: 30px;
    background-color: #d0f2ca;
    border-radius: 5px;
    border: 0px;
    align-items: center;
    display: flex;
    margin: auto;
    padding: 8px;
    font-size: 15px;
  }
`;
