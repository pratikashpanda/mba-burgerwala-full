import React, { useState } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { server } from "../../redux/store";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/user";
import { createMuiTheme } from "@mui/material";

  

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("Username:", username);
    // console.log("Password:", password);
    dispatch(loginUser(username, password));
  };

  // const loginHandler = () => {
  //   window.open(`${server}/googlelogin`, "_self");
  // };

  const buttonStyle = {
    width: '20rem', // Set the desired width
  };

  return (
    <section className="login">
      {/* <motion.button
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        onClick={loginHandler}
      >
        <FcGoogle />
      </motion.button> */}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          className="inputField"
          margin="normal"
          value={username}
          inputProps={{ style: { borderBlockColor: "white" } }}
          onChange={handleUsernameChange}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
          Login
        </Button>
      </form>

      <Link to="/register">
        <Button style={buttonStyle} className="registerBtn" variant="outlined" color="error" fullWidth size="large">
          Register
        </Button>
      </Link>
    </section>
  );
};

export default Login;
