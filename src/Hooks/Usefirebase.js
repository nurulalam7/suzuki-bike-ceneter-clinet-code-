import initializeFirebase from "../Authentication/Firebase.init";
import React, { useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword,updateProfile  } from "firebase/auth";



initializeFirebase();




const Usefirebase = () => {
    const [user,setuser]=useState({});
    const [loading,setloading]=useState(true);
    const [error,seterror]=useState('');
    const [admin,setadmin]=useState(false);


    const auth = getAuth();

    const registeruser=(email,password,name,history)=>{
      setloading(true);
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
           seterror('');

          //  for display user name 
          const newuser={email,displayName:name};
          setuser(newuser);

          // save user to database 
          saveuser(email,name);

          // send name to fire base after creaton 
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            
          }).catch((error) => {
            
          });
          



          //  for history 
          history.replace('/')


          })
          .catch((error) => {
            const errorCode = error.code;
            seterror(error.message);
            // ..
          })
          .finally(()=>setloading(false));
        

    }


    const loginuser =(email,password,location,history)=>{
      setloading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          // for redicet 
          const destination =location?.state?.from || '/home';
          history.replace(destination);

          // for error 
          seterror('');
        })
        .catch((error) => {
          const errorCode = error.code;
          seterror(error.message);
        })
        .finally(()=>setloading(false));
      
    }

    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth, (user) => {
            if (user) {
              
              const uid = user.uid;
              setuser(user);
            } else {
                setuser({})
              
            }
            setloading(false);
          });
          return ()=>unsubscribe;
          
    },[])

    useEffect(()=>{
      fetch(`https://serene-island-58723.herokuapp.com/users/${user.email}`)
      .then(res=>res.json())
      .then(data =>setadmin(data.admin))

    },[user.email])

    const logout =()=>{
      setloading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
         .finally(()=>setloading(false));
    }

    const saveuser=(email,displayName)=>{
      const user={email,displayName};
      fetch('https://serene-island-58723.herokuapp.com/users',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(user)
      })
      .then()

    }
    return {
        user,
        admin,
        loading,
        error,
        registeruser,
        loginuser,
        logout

    }
}

export default Usefirebase
