import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import RedBar from '../../components/RedBar/RedBar'

const Login = () => {


   
  return (
    <div>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          width: 500,
          p: 2,
          margin: "0 auto",
          border: "1px solid grey",
          marginTop: "30px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <TextField
          fullWidth
          label="Login"
          variant="outlined"
        />
        <RedBar />
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
        />
        <RedBar />
        <Button
        fullWidth
          variant="contained"
          style={{ margin: "0 auto" }}
          disableElevation
        >
          Disable elevation
        </Button>
      </Box>
    </div>
  );
};

export default Login;
