import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet";

const AllBlog = () => {
  return (
    <div>
      <Helmet>
        <title>CodeDock | AllBlog </title>
      </Helmet>

      <h1
        className="text-5xl text-center font-bold py-10 h-10"
        style={{ margin: "auto 0" }}
      >
        <span
          className="text-transparent bg-clip-text  bg-gradient-to-r from-indigo-700 
                                  to-violet-500  rounded-xl mb-10"
          style={{ fontWeight: "bold" }}
        >
          <Typewriter
            words={["All Blog"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>

      <p className="w-[90%] lg:w-7/12 text-center mx-auto py-10 pb-10 font-semibold">
        Below you&apos;ll find answers to the most common questions you may have
        on CodeDock. Also, please feel free to check out our Facebook & Google
        Advertising Guides & Academy. If you still can&apos;t find the answer
        your&apos;re lokking for, just Contact us!
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3  mx-14 mb-24 container pt-10 gap-12">
        <div className="card bg-white shadow-lg shadow-violet-500/50 h-full border w-96">
          <div className="card-body">
            <img src="https://i.ibb.co/85VwNwK/GIT-BLOGs.png" alt="" />
            <div className="card-actions justify-end">
              {/* Use the Link component to navigate */}
              <Link
                to="/user/gitblog"
                className="btn text-xl text-white bg-violet-600 shadow-lg shadow-violet-500/50"
              >
                See All
              </Link>
            </div>
          </div>
        </div>

        <div className="card bg-white shadow-lg shadow-violet-500/50 h-full border w-96">
          <div className="card-body">
            <img src="https://i.ibb.co/TwVdSgj/GIT-BLOGs-1.png" alt="" />
            <div className="card-actions justify-end">
              {/* Use the Link component to navigate */}
              <Link
                to="/htmlblog"
                className="btn text-xl text-white bg-violet-600 shadow-lg shadow-violet-500/50"
              >
                See All
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-white shadow-lg shadow-violet-500/50 h-full border w-96">
          <div className="card-body">
            <img src="https://i.ibb.co/2NJRfky/GIT-BLOGs-3.png" alt="" />
            <div className="card-actions justify-end">
              {/* Use the Link component to navigate */}
              <Link
                to="/cssblog"
                className="btn text-xl text-white bg-violet-600 shadow-lg shadow-violet-500/50"
              >
                See All
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-white shadow-lg shadow-violet-500/50 h-full border w-96">
          <div className="card-body">
            <img src="https://i.ibb.co/JR80tSY/GIT-BLOGs-2.png" alt="" />
            <div className="card-actions justify-end">
              {/* Use the Link component to navigate */}
              <Link
                to="/javablog"
                className="btn text-xl text-white bg-violet-600 shadow-lg shadow-violet-500/50"
              >
                See All
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-white shadow-lg shadow-violet-500/50 h-full border w-96">
          <div className="card-body">
            <img src="https://i.ibb.co/qdRXGg1/GIT-BLOGs-4.png" alt="" />
            <div className="card-actions justify-end">
              {/* Use the Link component to navigate */}
              <Link
                to="/reactblog"
                className="btn text-xl text-white bg-violet-600 shadow-lg shadow-violet-500/50"
              >
                See All
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlog;
