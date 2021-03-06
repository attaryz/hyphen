import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signin, register } from "../../actions/userActions";
// import { AUTH } from "../../constants/userConstants";
import { Paper, TextField, Typography, Button } from "@material-ui/core";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const [form, setForm] = useState(initialState);
  // const [isSignup, setIsSignup] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(register(form, history));
    console.log({ form });
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6">Register</Typography>

        <TextField
          name="name"
          variant="outlined"
          label="Name"
          fullWidth
          required
          type="name"
          onChange={handleChange}
        />
        <TextField
          name="email"
          variant="outlined"
          label="Email"
          required
          type="email"
          fullWidth
          multiline
          rows={4}
          onChange={handleChange}
        />
        <TextField
          name="password"
          variant="outlined"
          label="Password"
          fullWidth
          required
          onChange={handleChange}
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Register
        </Button>
        <Typography>have an account ?</Typography>
      </form>
    </Paper>
  );
};

export default Register;
