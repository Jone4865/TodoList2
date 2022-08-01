import React from "react";
import styled from "styled-components";
import { Link, useParams } from 'react-router-dom'
import {useSelector} from "react-redux"

const Detail = (props) => {
    const { todos } = useSelector((state) => state.todos);
    const params = useParams();
    console.log(params.title)

    
    return (
        <Body>
            <div>
                <div>ID:</div>
                <Before>
                    <Link to='/'>목록으로</Link>
                </Before>
            </div>
            <h2>{params.title}</h2>
            <div>내용</div>
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
    margin-bottom:
}
`

const Before = styled.div`
    width: 70px;
    background-color: #50cfef67;
    height: 30px;
    padding: 3px;
    border-radius: 5px;
`
