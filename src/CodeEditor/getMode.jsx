import CodeMirror from 'codemirror';

const getMode = (fileName) => {
    const fileExtension = fileName.split('.').pop();
    const modeInfo = CodeMirror.findModeByExtension(fileExtension);
    if (modeInfo) {
        return modeInfo.mode;
    }
    return 'text/plain'; // Default to plain text
};

export default getMode;
