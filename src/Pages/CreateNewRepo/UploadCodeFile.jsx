import React from 'react';
// import { CloudinaryContext, Image, Video } from '@cloudinary/react';
import { openUploadWidget } from '@cloudinary/url-gen';


const UploadCodeFile = () => {
    const handleUpload = () => {
        const myWidget = openUploadWidget(
          {
            cloudName: 'your_cloud_name', // Replace with your Cloudinary Cloud Name
            uploadPreset: 'your_upload_preset', // Replace with your Cloudinary upload preset
            sources: ['local', 'url', 'camera', 'google_drive'],
            clientAllowedFormats: ['txt', 'js', 'py', 'java'],
            maxFiles: 1,
            resourceType: 'raw',
            multiple: false,
          },
          (error, result) => {
            if (!error && result && result.event === 'success') {
              // Handle the uploaded file's response (result.info.url)
              console.log('Uploaded URL:', result.info.url);
              // You can make an API request to store this URL in your MongoDB repository
            }
          }
        );
    
        // Open the upload widget
        myWidget.open();
      };
    

  return (
    <div>
      <button onClick={handleUpload}>Upload Code File</button>
    </div>
  );
};
export default UploadCodeFile;
