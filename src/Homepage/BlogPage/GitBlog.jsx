import { blogData } from "../BlogPage/GitBlogs"
import { Typewriter } from 'react-simple-typewriter';
import { Helmet } from "react-helmet";


const Blog = () => {
    console.log(blogData)

  


    return (

        <div >

           
            <Helmet>
                <title>CodeDock | GitBlog </title>
            </Helmet>
            
            <h1 className='text-3xl lg:text-5xl text-center font-bold py-16 h-10 mb-16 ' style={{ margin: 'auto 0' }}>
                            <span className='text-transparent bg-clip-text  bg-gradient-to-r from-indigo-700 
                                  to-violet-500  rounded-xl mb-10' style={{ fontWeight: 'bold' }}>

                                <Typewriter
                                    words={['Git Hub Related Blogs']}
                                    loop={false}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}

                                />
                            </span>
                        </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3  gap-5 container  mx-auto mb-24 ">
                {
                    blogData?.map(
                        (blog, index) => (<div key={index}>

                            
                            <div className="card  bg-white shadow-lg shadow-violet-500/50 h-full border">

                                <div className="card-body text-gray-600 ">
                                    <img  src={blog.image} alt="" />

                                    <button className="btn text-xl text-white bg-violet-600 shadow-lg shadow-violet-500/50"
                                        onClick={() => document.getElementById(`modal-${blog.id}`).showModal()}>See More</button>




                                    <dialog id={`modal-${blog.id}`} className="modal">

                                        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
                                            <img className="shadow-xl mb-10" src={blog.image} alt="" />
                                            <h2 className="card-title font-semibold">
                                                <span className="font-bold ">

                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        height="1em"
                                                        viewBox="0 0 448 512"
                                                    >
                                                        <path
                                                            fill="#008000"
                                                            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                                        />
                                                    </svg>
                                                </span>
                                                <span className="text-violet-700">
                                                {blog.heading}
                                                </span>
                                            </h2>
                                            <p className="py-3">{blog.blog}</p>

                                            {
                                                blog.points.map((e, i) => <div key={i}>
                                                    <p className="pt-3">
                                                        <span className="font-bold pr-2 text-violet-700">{e.pointTitle}</span>
                                                        {e.details}</p></div>)
                                            }

                                            <div className="modal-action">
                                                {/* if there is a button, it will close the modal */}
                                                <button className="btn text-white bg-violet-700 shadow-lg shadow-violet-500/50" onClick={() => document.getElementById(`modal-${blog.id}`).close()}>Close</button>

                                            </div>

                                        </form>
                                    </dialog>


                                </div>

                            </div>








                        </div>
                        ))}
            </div></div>
    );
};

export default Blog;
