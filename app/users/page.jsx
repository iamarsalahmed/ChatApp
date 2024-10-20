'use client';
import React, { useEffect, useState } from 'react';
import { getDocs, db, collection } from '../(database)/firebase-config';
import Link from 'next/link';
import Image from 'next/image';
import { HiArrowRight } from 'react-icons/hi'; // Importing the arrow icon

const Users = () => {
    const [usersList, setUsersList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true);
            const response = await getDocs(collection(db, 'user'));
            const user = [];
            response.forEach((doc) => {
                user.push(doc.data());
            });
            setUsersList(user);
            setLoading(false);
        };

        getUsers();
    }, []);

    return (
        <div className='bg-white min-h-screen p-6'>
            <h1 className='text-3xl font-bold text-center text-blue-600 mb-8'>Users</h1>
            {loading ? (
                <div className='text-center text-blue-600'>Loading...</div>
            ) : (
                <div className='max-w-xl mx-auto'>
                    {usersList.map((data) => (
                        <Link key={data.userId} href={`/chat/${data.userId}`}>
                            <div className='flex items-center justify-between bg-blue-100 p-4 rounded-lg shadow-md mb-4 hover:bg-blue-200 transition cursor-pointer'>
                                <div className='flex items-center'>
                                    <div className='relative w-12 h-12'>
                                        <Image
                                            src={data.avatar} // Assuming `data.avatar` contains the avatar image URL
                                            alt={data.name}
                                            layout='fill'
                                            objectFit='cover'
                                            className='rounded-full'
                                        />
                                    </div>
                                    <h2 className='ml-4 text-blue-600 font-semibold'>{data.name}</h2>
                                </div>
                                <HiArrowRight className='text-blue-600' />
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Users;
