import React, { useState, useEffect } from "react";
import MonacoEditor from "react-monaco-editor";
import getMode from "./getMode";

const CodeEditor = ({ file }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (file) {
      setContent(file.content);
    }
  }, [file]);

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <div className="mx-auto my-4">
      {file && (
        <div>
          <MonacoEditor
            width="800"
            height="600"
            language={getMode(file.name)}
            
            theme="vs-dark"
            value={content}
            onChange={handleContentChange}
          />
        </div>
      )}
    </div>
  );
};

export default CodeEditor;
