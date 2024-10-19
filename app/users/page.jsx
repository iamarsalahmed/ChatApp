'use client'
import React, { useEffect, useState } from 'react'
import { app, getDocs, auth, signInWithEmailAndPassword, db, collection, addDoc, getFirestore, getAuth, createUserWithEmailAndPassword } from '../(database)/firebase-config';
import Link from 'next/link';
import Image from 'next/image'
const Users = () => {

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true)
            const response = await getDocs(collection(db, "user"));
            const user= []
            response.forEach((doc) => {
               user.push(doc.data())
            })
            setUsersList(user)
            console.log(usersList, "user")
            setLoading(false)
        }

        getUsers()
    }, [])

    const [usersList, setUsersList] = useState([])
    const [loading, setLoading] = useState(false)
    console.log(usersList, 'abc')

    return (<>




        {loading ? (<div>loading...</div>) : (
            <div>
                {usersList.map((data) => {
                    return (
                        <Link key={data.userId} href={`/chat/${data.userId}`}>
                            <div onClick={() => {

                            }} className='flex justify-between m-4 bg-green-300 p-4'><h1 key={data.userId}>{data.name}</h1>
                                <h1>{data.email}</h1>
                            </div>
                        </Link>
                    )
                })}
            </div>
        )}


    </>
    )
}

export default Users
