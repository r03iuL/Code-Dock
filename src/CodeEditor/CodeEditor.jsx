// CodeEditor.js
import React, { useState, useEffect } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/meta';
import getMode from './getMode'; // We'll create this helper function
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

const CodeEditor = ({ file }) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        if (file) {
            setContent(file.content);
        }
    }, [file]);

    const handleContentChange = (editor, data, value) => {
        setContent(value);
    };

    return (
        <div>
            {file && (
                <div>
                    <h2>{file.name}</h2>
                    <CodeMirror
                        value={content}
                        onBeforeChange={handleContentChange}
                        options={{
                            mode: getMode(file.name),
                            theme: 'material',
                            lineNumbers: true,
                            lineWrapping: true,
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default CodeEditor;
