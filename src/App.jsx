


import React, { useState } from 'react';
import CodeEditor from './CodeEditor'; // Update the path accordingly
import FileList from './FileList'; // Update the path accordingly
import './App.css'; 

// import Homepage from "./Homepage/Home/Homepage";

const App = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileSelect = (file) => {
        setSelectedFile(file);
    };

    const files = [
        { name: 'example.js', content: 'console.log("Hello, world!");' },
        { name: 'sample.py', content: 'print("Hello, world!")' },
        // Add more files
    ];

    


    

    return (
        <div>
            <h1>Codedock Text Editor</h1>
            <FileList files={files} onFileSelect={handleFileSelect} />
            <CodeEditor file={selectedFile} />

           
        </div>
    );
};

export default App;
