import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

import './userprofile.css'
import { AiOutlineEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const { user } = useContext(AuthContext)
  return (
    <div className="w-[85%] mx-auto mb-10  mt-3">
      <div className=' '>
        <div className="">
          <img className='w-full h-80 rounded-b-2xl' src="https://github.blog/wp-content/uploads/2023/01/1200x640.png?resize=800%2C425" alt="" />
        </div>
        <div className="px-14">
          <div className=" flex justify-between items-center ">
            <div className=" items-center     block ">
              <img
                src={user?.photoURL}
                alt="User Avatar"
                className="h-32 mb-3  -mt-16 w-32 border-4  border-purple-700   rounded-full object-cover"
              />
              <div>
                <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
                <p className="text-gray-600 text-xl flex items-center gap-1"> <span className='bg-black  text-white text-xl rounded-lg px-1'>@</span> {user?.email}</p>

              </div>

            </div>
            <Link to='/user/setting'>
              <button className=' flex gap-2 bg-black text-white p-2 rounded-lg '>
                <AiOutlineEdit className='text-2xl '></AiOutlineEdit>
                <p className="">Edit</p>
              </button>
            </Link>
          </div>
          <div className="h-1  mt-5  bg-purple-700"></div>
        </div>


      </div>

    </div>
  );
};

export default UserProfile;