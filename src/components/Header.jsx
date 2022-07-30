import React from "react";
import styled from 'styled-components';

const Header = () => {
 
  return (
    <HeaderDiv>
        <h3>My Todo List</h3><div>J.One</div>
    </HeaderDiv>
  )
};
export default Header;

const HeaderDiv = styled.div`
    width: 90%;
    max-width: 1200px;
    display:flex;
    border: 3px solid;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    h3 {
        margin-left:10px;
    }
    div {
        margin-right:10px;
    }
    `;