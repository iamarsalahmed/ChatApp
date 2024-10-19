'use client';
import React, { useState } from 'react';
import { app, auth,signInWithEmailAndPassword, db, collection, addDoc, getFirestore, getAuth, createUserWithEmailAndPassword } from '../(database)/firebase-config';
import { useRouter } from 'next/navigation'
import '../globals.css';
import Swal from 'sweetalert2'

const SignIn = () => {
    const router = useRouter()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(async(userCredential) => {
        const user = userCredential.user;
        setLoading(false)
        await Swal.fire({
            title: "Sign Up Successfull",
            text: email,
            icon: "success"
          });
          router.push("/chat")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: errorCode,
          text: errorMessage,
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      });

      
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <br />
        <h1>Sign In Page</h1>

        <label htmlFor="name">Name</label>
        <input onChange={(e) => setName(e.target.value)} type="text" className="input" name="name" id="name" />
        <br />

        <label htmlFor="email">Email</label>
        <input onChange={(e) => setEmail(e.target.value)} type="email" className="input" name="email" id="email" />
        <br />

        <label htmlFor="password">Password</label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" className="input" name="password" id="password" />
        <br />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <button type="submit">Sign up</button>
        )}
      </form>
    </>
  );
};

export default SignIn;
