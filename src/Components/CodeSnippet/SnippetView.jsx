import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

function SnippetView() {
    // Get the 'id' parameter from the URL using React Router
    const { id } = useParams();

    // State variable to store the snippet data
    const [snippet, setSnippet] = useState(null);

    // Construct a shareable URL based on the snippet's 'id'
    const shareableUrl = `http://localhost:5173/user/snippet/${id}`;

    // Use useEffect to fetch snippet data when the component mounts
    useEffect(() => {
        // Fetch snippet data from the backend using your API endpoint
        fetch(`http://localhost:5000/snippets/${id}`)
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

    // If snippet data is not yet available, display a loading message
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
                    {/* Display snippet details */}
                    <h5 className="text-gray-500 text-sm"></h5>
                    <h3 className="border-y-2 border-indigo-100 mb-10"></h3>
                    <h4 className='mt-5 font-normal'>
                        From <span className='font-bold'>{snippet.author}</span> , written in <span className='font-bold'>{snippet.language}</span>
                    </h4>

                    {/* Display shareable URL and download link */}
                    <h4>
                        URL:{" "}
                        <a className='text-blue-400' href={shareableUrl} target="_blank" rel="noopener noreferrer">
                            {shareableUrl}
                        </a>
                    </h4>

                    <h4>
                        <a
                            href={`data:text/plain;charset=utf-8,${encodeURIComponent(snippet.content)}`}
                            download={`${snippet.title}.txt`}
                            className='text-blue-400'
                        >
                            Download
                        </a>{" "}
                        or{" "}
                        <Link to={`/user/view-code/${snippet._id}`} className='text-blue-400'>
                            View Code
                        </Link>
                    </h4>

                    {/* Display social media icons */}
                    <div className='mt-10 flex gap-4'>
                        <FaFacebook className='text-5xl text-blue-700'></FaFacebook>
                        <FaInstagram className='text-5xl text-pink-600'></FaInstagram>
                        <FaTwitter className='text-5xl text-blue-400'></FaTwitter>
                    </div>
                </div>

                {/* Display the code content */}
                <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">{snippet.content}</pre>
            </div>
        </div>
    );
}

export default SnippetView;
