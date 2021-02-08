import React, { useRef, Fragment } from "react";
import { StyledUpload, StyledUploadInput } from "./StyledUpload";

const Upload = ({ label, disabled, fileTypes, onUpload, className }) => {
  const inputRef = useRef();
  return (
    <Fragment>
      <StyledUpload
        label={label}
        className={className}
        disabled={disabled}
        onClick={() => inputRef.current.click()}
      />
      <StyledUploadInput
        aria-label="File upload"
        ref={inputRef}
        type="file"
        accept={fileTypes}
        onChange={(event) => onUpload(event)}
      />
    </Fragment>
  );
};

export default Upload;
