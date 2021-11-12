import React from 'react'
import { useForm } from "react-hook-form";
import './Addnewbike.css'
import axios from 'axios';

const Addnewbike = () => {

    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data =>{
        console.log(data);
        axios.post('http://localhost:5000/services',data)

        .then(res=> {
            if(res.data.insertedId){
                alert('added successfully');
                reset();
              
            }
        })
      }
    return (
        <div className='dash'>
            <form onSubmit={handleSubmit(onSubmit)}>
                        <h2>please add a new bike</h2>
                        <input {...register("name", { required: true, maxLength: 20 })} placeholder="service name" />
                        <textarea {...register("description" )} placeholder="description" />
                        <input type="number" {...register("price")} placeholder="price" />
                        <input {...register("img" )} placeholder="img url" />
                        
                        <input type="submit" />
            </form>
        </div>
    )
}

export default Addnewbike
