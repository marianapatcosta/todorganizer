import React, { useRef, Fragment } from "react";
import { fileTypes } from "../../constants";
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
      ></StyledUpload>
      <StyledUploadInput
        ref={inputRef}
        type="file"
        accept={fileTypes}
        onChange={(e) => onUpload(e)}
      />
    </Fragment>
  );
};

export default Upload;
