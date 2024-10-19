'use client';
import React, { useState } from 'react';
import { app, auth, db, collection, addDoc, getFirestore, getAuth, createUserWithEmailAndPassword } from '../(database)/firebase-config';
import { useRouter } from 'next/router';
import '../globals.css';
import Swal from 'sweetalert2'

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const docs = await addDoc(collection(db, "user"), {
          name,
          email,
          userId: user.uid,
        });
        console.log("document written with", docs.id)
        setLoading(false);
        await Swal.fire({
          title: "Sign Up Successfull",
          text: email,
          icon: "success"
        });
        route.push("/chat")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: errorMessage,
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      });

      
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <br />
        <h1>Sign Up Page</h1>

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

export default SignUp;
