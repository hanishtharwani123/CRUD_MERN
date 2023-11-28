import React, { useState, useEffect } from "react";
import "../styles/updateUser.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const updateUser = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/getUser/" + id)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setAge(res.data.age);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const ubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/updateUser/" + id, { name, email, age })
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
        <form className="form" onSubmit={ubmit}>
          <input
            type="text"
            name="name"
            id="username"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <br></br>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br></br>
          <input
            type="number"
            name="age"
            id="password"
            placeholder="Enter Age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
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

export default updateUser;
