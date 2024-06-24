import { useState } from "react";
import { FileUploader as ReactFileUploader } from "react-drag-drop-files";

const fileTypes = ["jpg"];

const FileUploader = ({ onSelect, file }) => {
    const handleChange = (file) => {
        onSelect(file);
    };

    return (
        <div>
            <ReactFileUploader
                handleChange={handleChange}
                types={fileTypes}
                fileOrFiles={file}
            />
            <p className="mt-2">{file && `File name: ${file.name}`}</p>
        </div>
    );
};

export default FileUploader;
