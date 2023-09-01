import 'monaco-editor/esm/vs/editor/editor.api';
import { monaco } from 'react-monaco-editor';

const getMode = (fileName) => {
    const fileExtension = fileName.split('.').pop();
    console.log('File Extension:', fileExtension); // Log the file extension
    
    const supportedLanguages = monaco.languages.getLanguages();
    console.log('Supported Languages:', supportedLanguages); // Log the supported languages and their extensions
    
    const mode = supportedLanguages.find(lang => lang.extensions.includes(fileExtension));
    console.log('Selected Mode:', mode); // Log the selected mode
    
    if (mode) {
        return mode.id;
    }
    return 'plaintext';
};

export default getMode;
