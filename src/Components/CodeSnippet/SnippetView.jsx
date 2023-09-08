import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

function SnippetView() {
    const { id } = useParams();
    const [snippet, setSnippet] = useState(null);
    const shareableUrl = `http://localhost:5173/snippet/${id}`;


    useEffect(() => {
        // Fetch snippet data from the backend using your API endpoint
        fetch(`https://code-dock-backend.vercel.app/snippets/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                if (data) {
                    setSnippet(data);
                } else {
                    console.log('No matching snippet found');
                }
            })
            .catch(error => {
                console.error('Error fetching snippet:', error);

            });
    }, [id]);


    if (!snippet) {
        return <div>Loading...</div>;
    }

    return (
        <div className='container mx-auto px-4'>
            <div className='md:mt-20 mt-16'>
                <h1 className='text-4xl font-serif text-indigo-600 mb-10'>
                    {snippet.title}
                </h1>
                <div className='mt-5 mb-16'>
                    <h5 className="text-gray-500 text-sm"></h5>
                    <h3 className="border-y-2 border-indigo-100"></h3>
                    <h3 className='mt-5'>
                        From <span className='font-bold'>{snippet.author}</span> , written in <span className='font-bold'>{snippet.language}</span>
                    </h3>

                    <p>
                        URL:{" "}
                        <a className='text-blue-400' href={shareableUrl} target="_blank" rel="noopener noreferrer">
                            {shareableUrl}
                        </a>
                    </p>

                    <h1>
                        <a
                            href={`data:text/plain;charset=utf-8,${encodeURIComponent(snippet.content)}`}
                            download={`${snippet.title}.txt`}
                        >
                            <span className='text-blue-400'>Download</span>
                        </a>{" "}
                        or <Link to={`/view-code/${snippet._id}`}>
                            <span className='text-blue-400'>View Code</span>
                        </Link>
                    </h1>
                    <div className='mt-5 flex gap-4'>
                        <FaFacebook className='text-5xl text-blue-700'></FaFacebook>
                        <FaInstagram className='text-5xl text-pink-600'></FaInstagram>
                        <FaTwitter className='text-5xl text-blue-400'></FaTwitter>
                    </div>
                </div>

                <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">{snippet.content}</pre>

            </div>
        </div>
    );
}

export default SnippetView;







