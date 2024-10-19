import React, { useState } from 'react'
import {app, auth, db, collection, addDoc, getFirestore, getAuth, createUserWithEmailAndPassword} from '../(database)/firebase-config'
import { useRouter } from 'next/router'

// type Form = {
//   name: string;
//   setName: string;
//   email: string;
//   setEmail: string;
//   password: string;
//   setPassword: string;
//   loading: boolean;
//   setLoading: boolean;
// };


const SignIn = () => {
 const [name, setName] = useState<string>()
 const [email, setEmail] = useState<string>()
 const [password, setPassword] = useState<string>()
 const [loading, setLoading] = useState(false)

const handleSubmit =(e)=>{
  e.preventDefault()
  setLoading(
    true

  )
}


  return (
    <> 
    <form action="">

    <label htmlFor="name">Name</label>
    <input onChange={e=> setName(e.target.value)} type="text" name="name" id="name" />


    <label htmlFor="email">Email</label>
    <input onChange={e=> setEmail(e.target.value)} type="email" name="email" id="email" />

    <label htmlFor="passowrd">Password</label>
    <input onChange={e=> setPassword(e.target.value)} type="password" name="password" id="password" />

  


    </form>
    
    
    </>
  )
}

export default SignIn
