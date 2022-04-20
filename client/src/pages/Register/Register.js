import React,{useState} from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import RedBar from '../../components/RedBar/RedBar'
import axios from 'axios'
const Register = () => {

  
  const [email,setEmail]=useState('') 
  const [password,setPassword]=useState('') 

  const handleSignUp = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/users',{email,password})
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
  }

  return (
    <div>
    <Box
      component="form"
      onSubmit={handleSignUp}
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
     <h2 style={{textAlign:'center'}}>Register</h2>
      <TextField
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        fullWidth
        label="Email"
        color="secondary"
        variant="outlined"
      />
      <RedBar />
      <TextField
         value={password}
          onChange={(e)=>setPassword(e.target.value)}
        fullWidth
        label="Password"
        color="secondary"
        variant="outlined"
      />
      <RedBar />
       <Button type='submit' fullWidth variant="contained" disableElevation>
      Register
    </Button>
    </Box>
  </div>
  )
}

export default Register