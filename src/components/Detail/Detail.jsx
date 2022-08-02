import React from "react";
import styled from "styled-components";
import { Link, useParams } from 'react-router-dom'
import {useSelector} from "react-redux"

const Detail = () => {
    const {todos}  = useSelector((state) => state);
    console.log(todos.Change[0].id)
    const params = useParams();
    
    return (
        <Body>
            <div>
                <div>ID: {todos.Change[0].id}</div>
                <Before>
                    <Link to='/' >목록으로</Link>
                </Before>
            </div>
            <h2>{params.title}</h2>
            <div>{todos.Change[0].text}</div>
        </Body>
    );
};

export default Detail;

const Body = styled.div`
width: 300px;
height: 300px;
margin: auto;
background-color: #e5d1d1;
position:absolute;
position:absolute;
    left:35%;
    top:25%;
    padding: 20px;
    border-radius: 10px;

div {
    align-items: center;
    display:flex;
    justify-content: space-between;
}
`

const Before = styled.div`
    width: 70px;
    background-color: #50cfef67;
    height: 30px;
    padding: 3px;
    border-radius: 5px;
`
