import React, { useState } from "react";
import CodeEditor from "./CodeEditor";
import FileList from "./FileList";

const Editormain = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const filePath =
    "https://res.cloudinary.com/dtcoomque/raw/upload/v1693332982/rxourxjku7tiw8vosbp0.txt"; // Provide the correct path

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold p-5 text-violet-500 ">
        Codedock Code Editor
      </h1>
      <FileList filePath={filePath} onFileSelect={handleFileSelect} />
      <div className=" flex items-center  ">
        <CodeEditor file={selectedFile} />
      </div>
    </div>
  );
};

export default Editormain;
