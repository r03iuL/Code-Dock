import 'monaco-editor/esm/vs/editor/editor.api';
import { monaco } from 'react-monaco-editor';

const getMode = (fileName) => {
    const fileExtension = fileName.split('.').pop();
    const mode = monaco.languages.getLanguages().find(lang => lang.extensions.includes(fileExtension));
    if (mode) {
        return mode.id;
    }
    return 'plaintext';
};

export default getMode;
