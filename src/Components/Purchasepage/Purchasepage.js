import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import Useauth from '../../Hooks/Useauth';
import './Purchasepage.css'

const Purchasepage = () => {

    const {register,handleSubmit}=useForm();
    const {user}=Useauth();

    const onSubmit=data=>{

        //  const saveddata=getstoredcart();
        //    data.order=saveddata;
        data.approved=false;
        data.price=singleservice.price;

       fetch('https://serene-island-58723.herokuapp.com/orders',{
           method:'POST',
           headers:{
               'content-type': 'application/json'
           },
           body:JSON.stringify(data)
       })
       .then(res=>res.json())
       .then(result=>{
           if(result.insertedId){
               alert('succeffuly completed order')
               
           }
       })
   }




    // for get 

    const {id}=useParams();
    const [singleservice,setsingleservice]=useState({});
    useEffect(()=>{
        fetch(`https://serene-island-58723.herokuapp.com/services/${id}`)
        .then(res=>res.json())
        .then(data=>setsingleservice(data));
    },[])
 
    return (
        <div>
             <div className="container">
               <div className="row">
                   <div className="col md-6">
                   <img className="hight-150px width-200px" src={singleservice.img} alt="" />
                   <h1>{singleservice.name}</h1>
                   <h2>Shipping charge :{singleservice.price}</h2>
                   <h6>{singleservice.description}</h6>


                   </div>
                   <div className="purchasepa col md-6">
                       <form onSubmit={handleSubmit(onSubmit)}>
                            <h2>please add a your information</h2>
                            <input value={user.displayName} {...register("displayName")}  />
                            <input value={user.email} {...register("email")}  />
                            <input value={singleservice.name} {...register("name", { required: true, maxLength: 20 })} placeholder="service name" />
                            <textarea {...register("location" )} placeholder="location" />
                            <textarea type='number' {...register("phonenumber" )} placeholder="phonenumber" />
                            <input value={singleservice.price} type="number" {...register("price")} placeholder="price" />
                            
                            
                            <input type="submit" />
                       </form>
                   </div>
               </div>
           </div>
            
            
        </div>
    )
}

export default Purchasepage
