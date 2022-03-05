import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField";
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const SignUp = () => {
  const [formData, updateFormData] = React.useState(new FormData());
  const [mail, setMail] = React.useState("")
  const [userName, setUserName] = React.useState("")
  const [password, setPassword] = React.useState("")
  const navigate = useNavigate();
  const hobbies = [
    'eating',
    'sleeping',
  ]


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(mail, userName, password);
    axios
      .post('http://localhost:4000/user/signup',
      {
        userName : userName,
        mail : mail, 
        password : password
      })
      .then(res=>{
        if(res.status==200)
          navigate(`/platform`);
        else
          console.log(res);
      })


    
  };
  return (
    <div style={{
      "display":"flex",
      "flexDirection":"column",
      "justifyContent":"center"
    }}>
      <img style={{
        "width":"50%",
        "height":"auto",
        "margin":"auto"
      }} src={require('../assets/images/ourlogo.png')}></img>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { 
              m: 1, width: "25ch",
            "display" : "flex",
            "flexDirection" : "row", 
            "border-radius" : "20px",
          },
          "padding" : "20px",
          "border": "1px solid #0055AA",
          "border-radius": "20px",
          "width": "fit-content",
          "margin" : "auto"
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField id="outlined-email" label="email" type="input" onChange={(e) => setMail(e.target.value)} />
          <TextField id="outlined-username" label="user name" type="input" onChange={(e) => setUserName(e.target.value)} />

          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            id="outlined-confirmation-password-input"
            label="confirm Password"
            type="password"
            autoComplete="current-password"
          />
              <Stack spacing={3} sx={{ width: 500 }}>
            <Autocomplete
              multiple
              id="tags-standard"
              options={hobbies}
              getOptionLabel={(option) => option}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Hobbies"
                  placeholder="Pick your own hobby"
                />
              )}
            />
            </Stack>
        </div>
          <Button onClick={handleSubmit}  sx={{ my: 2, backgroundColor : "#005AA7", color: 'white', display: 'block' }} >
            SignUp
          </Button>
      </Box>
    </div>
  )
}

export default SignUp
