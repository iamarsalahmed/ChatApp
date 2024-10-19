'use client'
import React, { useEffect, useState } from 'react'
import { app, getDocs, auth, signInWithEmailAndPassword, db, collection, addDoc, getFirestore, getAuth, createUserWithEmailAndPassword } from '../(database)/firebase-config';

const Users = () => {

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true)
            const response = await getDocs(collection(db, "user"));
            response.forEach((doc) => {
                setUsersList((prev) => [...prev, doc.data()])
            })
            setLoading(false)
        }

        getUsers()
    }, [])

    const [usersList, setUsersList] = useState([])
    const [loading, setLoading] = useState(false)
    console.log(usersList, 'abc')

    return (
        <div>



            {loading ? (<div>loading...</div>) : (
                <div>
                    {usersList.map((data) => {
                        return(
                        <h1 key={data.userId}>{data.name}</h1>
                        
                    )})}
                </div>
            )}

        </div>
    )
}

export default Users
