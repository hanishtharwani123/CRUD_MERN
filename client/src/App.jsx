import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/user";
import CreateUser from "./components/createUser";
import UpdateUser from "./components/updateUser";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
