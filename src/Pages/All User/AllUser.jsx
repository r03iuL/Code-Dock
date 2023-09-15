import React, { useState } from 'react';
import { useEffect } from 'react';
import { TiMessages } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const AllUser = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                if (data) {
                    setUsers(data);
                } else {
                    console.log('No Users found');
                }
            })
            .catch(error => {
                console.error('Error fetching snippet:', error);
            });
    }, [])


    return (
        <div className='bg-white max-w-7xl mx-auto border border-purple-600 rounded-md p-4 my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-20'>
            {
                users.map((user) => (<div
                    key={user._id}
                    className='border border-purple-600 rounded-3xl flex m-4'
                >
                    <div className='flex gap-5 m-4'>
                        <img src={user.img} className='rounded-full w-[70px] border-2 border-violet-600' alt="" />
                        <h2>{user.name}</h2>
                    </div>
                    <div className="m-auto me-10 text-violet-600">
                        <Link to='/chatbox'>
                        <TiMessages className='w-20 h-10'></TiMessages></Link>
                    </div>
                </div>))
            }

            </div>

        </div>
    );
};

export default AllUser;