import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Helmet } from "react-helmet";

const HtmlBlog = () => {
    return (
        <div>
             <Helmet>
                <title>CodeDock | HTMLBlog </title>
            </Helmet>

            <h1 className='text-3xl lg:text-5xl text-center font-bold py-16 h-10 mb-16' style={{ margin: 'auto 0' }}>
                <span className='text-transparent bg-clip-text  bg-gradient-to-r from-indigo-700 
                                  to-violet-500  rounded-xl mb-10' style={{ fontWeight: 'bold' }}>

                    <Typewriter
                        words={['HTML Related Blog']}
                        loop={false}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}

                    />
                </span>
            </h1>
        </div>
    );
};

export default HtmlBlog;