import { TextField,Button, Alert } from '@mui/material';

import React, { useState } from 'react'

const Makeadmin = () => {
    const [email,setemail]=useState('');
    const [success,setsuccess]=useState(false);

    const handelonblur=e =>{
        setemail(e.target.value);
    }




    const handleadminsubmit=e =>{
       const user={email};
        fetch('https://serene-island-58723.herokuapp.com/users/admin',{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){

                console.log(data);
                setemail('');
                setsuccess(true);

            }
            
        })
        e.preventDefault();

    }


    return (
        <div>
            <h3> make an admin</h3>
            <form onSubmit={handleadminsubmit}>
            <TextField 
           sx={{ width:'50%'}}
            label="Email" 
            type='email'
            onBlur={handelonblur}
            variant="standard" />
            <Button type="submit" variant='contained'>make admin</Button>

            </form>
            {
           success &&  <Alert severity="success"> make admin successfully </Alert>
       }
        </div>
    )
}

export default Makeadmin
