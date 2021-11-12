import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import './Review.css'

const Review = () => {

    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data =>{
        console.log(data);
        axios.post('http://localhost:5000/review',data)

        .then(res=> {
            if(res.data.insertedId){
                alert('added successfully');
                reset();
              
            }
        })
      }
    return (
        <div  className="rev">
             <form onSubmit={handleSubmit(onSubmit)}>
                        <h2>please write your review</h2>
                        <input {...register("img" )} placeholder="img url" />
                        <input {...register("name", { required: true, maxLength: 20 })} placeholder="your name" />
                        <textarea {...register("description" )} placeholder="about website descripton" />
                        <input type="number"   {...register("price")}  placeholder="rank" />
                        
                        
                        <input type="submit" />
            </form>
        </div>
    )
}

export default Review
