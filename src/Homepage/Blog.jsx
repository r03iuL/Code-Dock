import { blogData } from "../Homepage/Blogs"

const Blog = () => {
  console.log(blogData)



  return (

    <div >
      <h2 className="text-3xl lg:text-5xl font-semibold mb-5 text-center pt-10">
        Blog
      </h2>
      <p className="w-[90%] lg:w-7/12 mx-auto pb-10">
        Below you'll find answers to the most common questions you may have on CodeDock. Also, please feel free to check out our Facebook & Google Advertising Guides & Academy. If you still can't find the answer your're lokking for, just Contact us!
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-5 container  mx-auto mb-24 ">
        {
          blogData?.map(
            (blog, index) => ( <div key={index}>          


              <div className="card  bg-white shadow-xl shadow-violet-500/50 h-full">
                <div className="card-body text-gray-600 ">
                  <div className="card-title font-semibold flex items-start">
                    <p className="pt-1">

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
                    </p>
                    {blog.heading}
                  </div>
                  <p>{blog.answer}</p>

                  {/* You can open the modal using ID.showModal() method */}
                  <button className="btn text-xl text-white bg-violet-600 shadow-lg shadow-violet-500/50" onClick={() => document.getElementById(`modal-${blog.id}`).showModal()}>See More</button>




                  <dialog id={`modal-${blog.id}`} className="modal">

                    <form method="dialog" className="modal-box w-11/12 max-w-5xl">

                      <h2 className="card-title font-semibold">
                        <span className="font-bold">

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
                        {blog.heading}
                      </h2>
                      <p className="py-3">{blog.blog}</p>

                      {
                        blog.points.map((e, i) => <div key={i}>
                          <p className="pt-3">
                            <span className="font-bold pr-2">{e.pointTitle}</span>
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
