import React from "react";
import styled from "styled-components";
import Form from "./components/Form";
import Listing from "./components/Listing";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Form />
      <Listing />
    </div>
  );
};

export default App;
