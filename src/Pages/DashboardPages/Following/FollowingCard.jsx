import React from 'react';

import { RiUserFollowLine } from 'react-icons/ri';

const FollowingCard = ({ follow, darkMode  }) => {
    const { image, name, date } = follow;
    return (
        <div className=''>
            <div className={`bg-white shadow-md rounded-md p-4 flex justify-between items-center  ${darkMode ? "bg-violet  text-white" : "bg-white text-black"}`}>
                <div className={`flex items-center ${darkMode ? "bg-violet  text-white" : "bg-white text-black"}`}>
                    <img src={image} alt={name} className="w-20 h-20 rounded-full mr-4" />
                    <div className="">
                        <h3 className="text-xl font-semibold">{name}</h3>
                        <p className="text-gray-500">{date}</p>
                    </div>
                </div>
                <div className="">
                    <RiUserFollowLine className=' text-violet-700 text-right text-2xl'></RiUserFollowLine>
                </div>
            </div>
        </div>
    );
};

export default FollowingCard;

// const strAscending = [...employees].sort((a, b) =>
//     a.name > b.name ? 1 : -1,
//   );