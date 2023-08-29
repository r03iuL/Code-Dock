import React, { useState } from 'react';
import CodeEditor from './CodeEditor';
import FileList from './FileList';



const Editormain = () => {
    
    const [selectedFile, setSelectedFile] = useState(null);
    const filePath = 'https://res.cloudinary.com/dtcoomque/raw/upload/v1693332982/rxourxjku7tiw8vosbp0.txt'; // Provide the correct path

    const handleFileSelect = (file) => {
        setSelectedFile(file);
    };
   
    return (
        <div>
        <h1>Codedock Text Editor</h1>
        <FileList filePath={filePath} onFileSelect={handleFileSelect} />
        <CodeEditor file={selectedFile} />
    </div>
    );
};

export default Editormain;