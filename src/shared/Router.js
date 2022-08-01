import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "../components/TodoList/TodoList";
import Detail from "../components/Detail/Detail";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                <Route path="/" element={<TodoList />} />
                <Route path="/Detail" element={<Detail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;


