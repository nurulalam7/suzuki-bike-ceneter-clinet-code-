import { TextField,Button } from '@mui/material';

import React, { useState } from 'react'

const Makeadmin = () => {
    const [email,setemail]=useState('');

    const handelonblur=e =>{
        setemail(e.target.value);
    }

    const handleadminsubmit=e =>{
        const user={email};
        fetch('http://localhost:5000/users/makeadmin',{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
        e.preventDefault();

    }


    return (
        <div>
            <h3> make an admin</h3>
            <form onSubmit={handleadminsubmit}>
            <TextField 
            id="standard-basic" 
            label="Standard" 
            type='email'
            onBlur={handelonblur}
            variant="standard" />
            <Button type="submit" variant='contained'>make admin</Button>

            </form>
        </div>
    )
}

export default Makeadmin
