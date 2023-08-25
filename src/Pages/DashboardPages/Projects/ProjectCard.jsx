import { } from '@smastrom/react-rating';
import React from 'react';
import { FaFolder, FaRegHeart, } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    const { userName, repoName, types, numberOfRatings, image1, image2, image3, image4, date, status, rating } = project;
    console.log(project)
    return (
        <div >
            <div className=" ">
                <div className="h-1 w-full  bg-purple-700"></div>
                <div className="">
                    <div className="grid grid-cols-2 py-4 max-w-screen-lg mx-auto items-center">
                        <div className="grid grid-cols-3 items-center ">
                            <div className=''> <FaFolder className='text-8xl  text-purple-700'></FaFolder></div>
                            <div className="">
                                <div className="text-2xl font-semibold"> {repoName} </div>
                                <div className="text-lg font-semibold"> {userName} </div>
                                <div className="text-lg font-semibold"> {date} </div>

                            </div>
                            <div className="mx-auto">
                                <div className="text-lg text-center mb-2 font-semibold  ">{status}</div>
                                <div className="text-lg text-center mb-2 font-semibold  ">{types}</div>
                                <div className="flex gap-2 mx-auto ">
                                    <img className='h-6 w-7 rounded-full' src={image1} alt="" />
                                    <img className='h-6 w-7 rounded-full' src={image2} alt="" />
                                    <img className='h-6 rounded-full' src={image3} alt="" />
                                    <img className='h-6 rounded-full' src={image4} alt="" />
                                </div>

                            </div>
                        </div>
                        <div className='justify-end grid'>
                            <div className=""><FaRegHeart className='text-4xl mx-auto text-purple-700'></FaRegHeart> </div>
                            <div className="text-lg font-semibold">
                                Rating: {rating}
                            </div>
                            <div className="text-lg font-semibold">
                            Rated by: {numberOfRatings}
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;