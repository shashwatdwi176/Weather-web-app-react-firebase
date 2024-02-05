import React, { useState, useEffect } from "react";
import { unstable_HistoryRouter, useParam } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/database";


import "./AddEdit.css";
import fireDb from "../firebase"
import { toast } from "react-toastify";

const initializeState = {
  username: "",
  name: "",
  email: "",
  contact: "",
};
const AddUser = () => {
  const [state, setState] = useState(initializeState);
  const [data, setData] = useState({});

  const { username, name, email, contact } = state;
  const handleInputChange = () => {};
  const handleSubmit = () => {};
  return (
    <div>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={handleInputChange}
        />
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your Full Name"
          value={name}
          onChange={handleInputChange}
        />
        <label htmlFor="username">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="abc@example.com"
          value={email}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="+91-711-xxx-xxxx"
          value={contact}
          onChange={handleInputChange}
        />
        <input type= "submit" value="Save"/>
      </form>
    </div>
  );
};

export default AddUser;
