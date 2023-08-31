import React, { useState } from 'react';

const FileList = ({ onFileSelect }) => {
    const [files, setFiles] = useState([]);

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles(selectedFiles);

        selectedFiles.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
                onFileSelect({
                    name: file.name,
                    content: reader.result,
                });
            };
            reader.readAsText(file);
        });
    };

    return (
        <div>
            <h2>File List</h2>
            <input type="file" onChange={handleFileChange} multiple />
            <ul>
                {files.map((file, index) => (
                    <li key={index}>
                        {file.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FileList;
