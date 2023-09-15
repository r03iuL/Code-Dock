import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from "sweetalert2";

const UserProfile = () => {
 const {user} = useContext(AuthContext)
  // const Updatedinfo =(e) => {
  //   displayName = e.target.displayName
  // }

  const handleUpdateProfile = event => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const address = form.address.value;
    
    const updatedProfile = {name, email, number, address}
    console.log(updatedProfile)

  fetch(`http://localhost:5000/updateProfile/${user?.email}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(updatedProfile)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: 'Success!',
          text: 'update successful',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }




  // const { user } = useContext(AuthContext);
  

  const [isEditing, setIsEditing] = useState(false);
  

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  // }



  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-6">
        <div className="flex justify-between">
          <div className="flex items-center">
            <img
              src={user?.photoURL}
              alt="User Avatar"
              className="h-16 w-16 rounded-full object-cover mr-4"
            />
            <div>
              <h2 className="text-3xl font-semibold">{user?.displayName}</h2>
              <p className="text-gray-600">{user?.email}</p>
            </div>
          </div>
          <div>
            {!isEditing ? (
              <button href="#_" onClick={handleEditClick} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Edit Profile</span>
                <span className="relative invisible">Edit Profile</span>
              </button>





            ) : (
              <div className="flex space-x-4">
                <button
                  className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-blue-600"
                  onClick={handleSaveClick}
                >
                  Save
                </button>
                <button
                  className="px-4 py-2 text-sm font-medium text-white bg-gray-400 rounded-md hover:bg-gray-500"
                  onClick={handleEditClick}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>

        {isEditing ? (

          <form onSubmit={handleUpdateProfile} className="mt-6">
            <div className="mb-4  ">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={user?.displayName}
                
                className="mt-1 border-purple-600 outline-none  p-2 border rounded-md w-full  "
              />
              
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={user?.email}
                className="mt-1 p-2 border border-purple-600 outline-none rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                className="mt-1 p-2 border-purple-600 outline-none border rounded-md w-full  resize-none"
              ></input>
            </div>
            <div className="mb-4">
              <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                Number
              </label>
              <input
                id="number"
                name="number"
                type="number"
                className="mt-1 border-purple-600  outline-none p-2 border rounded-md w-full  resize-none"
              ></input>
            </div>

            <button  type='submit' className='bg-purple-500 px-3 py-2 text-white font-semibold'>Udate</button>
            
          </form>
        ) : (
          <div className="mt-6">
            <p className="text-gray-700">{user?.bio}</p>
          </div>
        )
        }
      </div>
      
    </div>
    
  );
};

export default UserProfile;












