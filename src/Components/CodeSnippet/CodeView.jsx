import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CodeView() {
    const { id } = useParams();
    const [snippet, setSnippet] = useState(null);

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

    if (!snippet) {
        return <div>Loading...</div>;
    }

    return (
        <div className='container mx-auto px-4'>
            <div className='md:mt-20 mt-16'>
                <h1 className='text-4xl font-serif text-indigo-600 mb-10'>
                     {snippet.title}
                </h1>
                {/* Render the snippet content */}
                <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">{snippet.content}</pre>
            </div>
        </div>
    );
}

export default CodeView;
