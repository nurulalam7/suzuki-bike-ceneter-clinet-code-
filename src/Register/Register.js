import React from 'react'
import { Grid,Container, Typography, TextField,Button,CircularProgress, Alert } from '@mui/material'
import { useState } from 'react'
import { NavLink,useHistory } from 'react-router-dom';
import Useauth from '../Hooks/Useauth';

const Register = () => {

    const [logindata,setlogindata]=useState({});
    const history=useHistory();
    const {user,registeruser,loading,error}=Useauth();



    const handleonchange=e =>{
        const field=e.target.name;
        const value=e.target.value;
        const newlogindata={...logindata};
        newlogindata[field]=value;
        console.log(newlogindata)
        setlogindata(newlogindata);
    }


    const handleloginsubmit =e=>{
        if(logindata.password !==logindata.password2){
            alert('your missed the type of password')
            return
        }
        registeruser(logindata.email,logindata.password,logindata.name,history);

        e.preventDefault();
    }
    return (
        <Container>
        <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
    <Typography variant="h4" gutterBottom component="div"> please register</Typography>
     {!loading && <form onSubmit={handleloginsubmit}>
       <TextField sx={{width:'75%' ,m:1}}
       id="standard-basic" 
       label="your name" 
       name='name'
      
       onChange={handleonchange}
       variant="standard" />

       <TextField sx={{width:'75%' ,m:1}}
       id="standard-basic" 
       label="your email" 
       name='email'
       type='email'
       onChange={handleonchange}
       variant="standard" />

     <TextField sx={{width:'75%' ,m:1}}
      id="standard-basic"
      label=" your Password"
      type="password"
      name="password"
      onChange={handleonchange}
      variant="standard"
    />
     <TextField sx={{width:'75%' ,m:1}}
      id="standard-basic"
      label="re-type your Password"
      type="password"
      name="password2"
      onChange={handleonchange}
      variant="standard"
    />


    <Button 
    sx={{width:'75%',m:1}}
    type='submit'
    variant='contained'
    >register</Button>

    <NavLink  to='/login' style={{textDecoration:'none'}}>
    <Button 
    sx={{width:'75%',m:1}}
    type='submit'
    variant='text'
    >already register ? please login</Button>
       
    </NavLink>
       
   
       </form>}
        {/* for spiner  */}
       {
           loading && <CircularProgress />
       }
        {/* for successfullly alert  */}
       {
           user?.email &&  <Alert severity="success">successfully completed register!</Alert>
       }
         {/* for error  */}
       {
          error && <Alert severity="warning">{error}</Alert>
       }
    
    </Grid>
    <Grid item xs={12} md={6}>
     
    </Grid>
    
  </Grid>
        </Container>
    )
}

export default Register
