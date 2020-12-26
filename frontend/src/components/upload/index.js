import React, { useRef, Fragment } from "react";
import { StyledUpload, StyledUploadInput } from "./StyledUpload";

const Upload = ({ label, disabled, onUpload, className }) => {
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
        accept=".xlsx,.xls,.csv"
        onChange={(e) => onUpload(e)}
      />
    </Fragment>
  );
};

export default Upload;
