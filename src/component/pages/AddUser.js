import React, { useState, useEffect } from "react";
import  useFirebase from "../firebase";
import { useNavigate, useParams } from "react-router-dom";
import "./AddEdit.css";
import 'firebase/database'
import { toast } from "react-toastify";


const initializeState = {
  username: "",
  name: "",
  email: "",
  contact: "",
};

const AddUser = () => {
  const firebase = useFirebase();
  const [state, setState] = useState(initializeState);
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const { username, name, email, contact } = state;
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!username || !name || !email || !contact) {
        toast.error("All fields are required");
      } else {
        firebase.putData("users/", {
          username: username,
          name: name,
          email: email,
          contact: contact,
        });
  
        toast.success("User added successfully");
        setTimeout(() => navigate("/"), 500);
      }
    };
  

  
  
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
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default AddUser;
