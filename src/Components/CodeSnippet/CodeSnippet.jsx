import React from 'react';

const CodeSnippet = ({ language, title, author, content }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mt-4">
            <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-gray-700">Language:{language}</span>
                <span className="text-gray-500">Author: {author}</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">Title: {title}</h2>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">{content}</pre>
        </div>
    );
};

export default CodeSnippet;
