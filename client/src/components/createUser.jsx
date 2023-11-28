import React, { useState } from "react";
import "../styles/createUser.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const createUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const Submit_user = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/createUser", { name, email, age })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="box">
        <h1 className="addUser">Add User</h1>
        <form className="form" onSubmit={Submit_user}>
          <input
            type="text"
            name="name"
            id="username"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br></br>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br></br>
          <input
            type="number"
            name="age"
            id="password"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <br></br>
          <div className="btn">
            <button type="submit" className="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default createUser;
