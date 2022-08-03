import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "../components/TodoList/TodoList";
import Detail from "../components/pages/Detail";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                <Route path="/" element={<TodoList />} />
                <Route path="/:title" element={<Detail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;


