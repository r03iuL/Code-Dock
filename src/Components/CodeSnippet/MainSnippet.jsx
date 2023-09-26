import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function MainSnippet() {
    // State variables to store user input
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    // An array of available programming languages
    const languageOptions = [
        'JavaScript',
        'Python',
        'Java',
        'C++',
        'Ruby',
        'C#',
        'C',
    ];

    // React Router hook for navigation
    const navigate = useNavigate();

    // Function to create a new code snippet
    const createPaste = async () => {
        // Validation: Check if title and author are provided
        if (!title || !author) {
            Swal.fire({
                title: 'Error!',
                text: 'Title and Author are required',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }

        try {
            // Send a POST request to a server with snippet data
            const response = await fetch('https://code-dock-backend.vercel.app/snippets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    language: selectedLanguage,
                    title,
                    author,
                    content,
                    expiration: new Date(),
                    visibility: 'public',
                }),
            });
            const data = await response.json();

            if (data.insertedId) {
                // Show a success alert and navigate to the new snippet
                Swal.fire({
                    title: 'Success!',
                    text: 'Snippet added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                }).then(() => {
                    navigate(`/user/snippet/${data.insertedId}`);
                });
            }
        } catch (error) {
            console.error('Error creating snippet:', error);
        }
    };

    return (
        <div className="bg-gray-100 m-10 min-h-screen flex justify-center items-center">
            <div className="container mx-auto w-full p-6 bg-gray-200 rounded-lg shadow-md">
                <h1 className="text-3xl font-semibold mb-4 text-violet-700">Create a new snippet</h1>
                <div className="mb-4 flex space-x-4">
                    {/* Input fields for Author, Title, and Language */}
                    <input
                        className="border border-violet-600 p-2 flex-1 rounded-lg"
                        type="text"
                        placeholder="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <input
                        className="border border-violet-600 p-2 flex-1 rounded-lg"
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <select
                        className="border border-violet-600 p-2 flex-1 rounded-lg"
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                    >
                        <option value="">Select Language</option>
                        {/* Generate language options */}
                        {languageOptions.map((language, index) => (
                            <option key={index} value={language}>
                                {language}
                            </option>
                        ))}
                    </select>
                </div>
                <h1 className="text-xl text-violet-700 font-semibold mb-4">Your snippet - Paste your code here</h1>
                {/* Textarea for entering code content */}
                <textarea
                    className="border border-violet-600 p-2 w-full mb-4 rounded-lg"
                    rows="10"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                {/* Button to create the snippet */}
                <button
                    className="bg-violet-700 text-white py-2 px-4 rounded hover:bg-violet-500"
                    onClick={createPaste}
                >
                    Create
                </button>
            </div>
        </div>
    );
}

export default MainSnippet;
