import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

const Detail = () => {
    return (
        <Body>
            <div>
                <div>ID:</div>
                <Before>
                    <Link to='/'>할일 목록으로...</Link>
                </Before>
            </div>
            <h2>제목</h2>
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
}
`

const Before = styled.div`
    width: 120px;
    background-color: #50cfef67;
    height: 30px;
    padding: 3px;
    border-radius: 5px;
`