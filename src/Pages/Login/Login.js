
import { Grid,Container, Typography, TextField,Button, CircularProgress, Alert } from '@mui/material'
import React, { useState } from 'react'
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import Useauth from '../../Hooks/Useauth';

const Login = () => {
     const [logindata,setlogindata]=useState({});
     const {user,loginuser,loading,error}=Useauth();
     const location=useLocation();
     const history=useHistory();


    const handleonchange=e =>{
        const field=e.target.name;
        const value=e.target.value;
        const newlogindata={...logindata};
        newlogindata[field]=value;
        setlogindata(newlogindata);
    }


    const handleloginsubmit =e=>{
      // for redirect location,histo 
      loginuser(logindata.email,logindata.password,location,history);
        e.preventDefault();
    }
    return (
        
            <Container>
            <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom component="div"> please login</Typography>
           <form onSubmit={handleloginsubmit}>
           <TextField sx={{width:'75%' ,m:1}}
           id="standard-basic" 
           label="Standard" 
           name='email'
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


        <Button 
        sx={{width:'75%',m:1}}
        type='submit'
        variant='contained'
        >login</Button>

        <NavLink  to='/register' style={{textDecoration:'none'}}>
        <Button 
        sx={{width:'75%',m:1}}
        type='submit'
        variant='text'
        >new user ? please register</Button>
           
        </NavLink>

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
           
       
           </form>

        
        </Grid>
        <Grid item xs={12} md={6}>
         
        </Grid>
        
      </Grid>
            </Container>
        
    )
}

export default Login
