
import { useQuery } from '@tanstack/react-query';
import React from 'react';
// import Swal from 'sweetalert2';




// const handleMakeAdmin = user => {
//     fetch(`http://localhost:5000/users/admin/${user._id}`, {
//         method: 'PATCH'
//     })

//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             if (data.modifiedCount) {
//                 refetch();
//                 Swal.fire({
//                     position: 'top-center',
//                     icon: 'success',
//                     title: `${user.name} is an Admin Now!`,
//                     showConfirmButton: false,
//                     timer: 1500
//                 })
//             }
//         })
// }


// const handleDelete = user => {
//     Swal.fire({
//         title: 'Are you sure?',
//         text: "You won't be able to revert this!",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//         if (result.isConfirmed) {
//             fetch(`https://summer-camp-scl-server-tisha-akter.vercel.app/users/admin/${user._id}`, {
//                 method: 'Delete'

//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     if (data.deletedCount > 0) {
//                         refetch();
//                         Swal.fire(
//                             'Deleted!',
//                             'Your file has been deleted.',
//                             'success'
//                         )
//                     }
//                 })
//         }
//     })
// }

const ManageUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })


    return (
        <div>
            {users.length}
        </div>
    );
};

export default ManageUsers;