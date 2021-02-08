import React, { useEffect, useReducer, useRef, Fragment } from "react";
import { CSVLink } from "react-csv";
import { toPng, toJpeg, toSvg } from "html-to-image";
import { jsPDF } from "jspdf";
import {
  documentFormat,
  documentOrientation,
  fileTypes,
} from "../../constants";
import {
  StyledExport
} from "./StyledExport";

const Export = ({
  className,
  exportOptions,
  disabled,
  backgroundColor,
  csvData,
  fileName,
  elementRef,
  pdfOrientation = documentOrientation.VERTICAL,
  pdfFormat = documentFormat.A4,
  onSuccess = () => null,
  onError = () => null,
}) => {
  const exportCsvRef = useRef();

  const onExportError = (fileType) => {
    onError(`It was not possible to export ${fileType} file.`);
  };

  const onExportCsv = () => {
    try {
      exportCsvRef.current.link.click();
      onSuccess();
    } catch (error) {
      onExportError(fileTypes.CSV);
    }
  };

  const onExportPdf = () => {
    try {
      const pdfDocument = new jsPDF({
        orientation: pdfOrientation,
        unit: "pt",
        format: pdfFormat,
      });

      pdfDocument.html(elementRef.current, {
        // margin: [250, 250, 250, 250], // not working
        x: 20,
        y: 20,
        callback: () => pdfDocument.save(`${fileName}${fileTypes.PDF}`),
      });
      onSuccess();
    } catch (error) {
      onExportError(fileTypes.PDF);
    }
  };

  const onExportJpeg = async () => {
    try {
      const dataUrl = await toJpeg(elementRef.current, {
        quality: 0.95,
        backgroundColor,
        /* filter: elementRef.current.tagName !== "span",*/
      });
      fileDownload(dataUrl, fileTypes.JPEG);
      onSuccess();
    } catch (error) {
      onExportError(fileTypes.JPEG);
    }
  };

  const onExportPng = async () => {
    try {
      const dataUrl = await toPng(elementRef.current, {
        quality: 0.95,
        backgroundColor,
      });
      fileDownload(dataUrl, fileTypes.PNG);
      onSuccess();
    } catch (error) {
      onExportError(fileTypes.PNG);
    }
  };

  const onExportSvg = async () => {
    try {
      const dataUrl = await toSvg(elementRef.current, { backgroundColor });
      fileDownload(dataUrl, fileTypes.SVG);
      onSuccess();
    } catch (error) {
      onExportError(fileTypes.SVG);
    }
  };

  const fileDownload = (dataUrl, fileFormat) => {
    const link = document.createElement("a");
    link.download = `${fileName}${fileFormat}`;
    link.href = dataUrl;
    link.click();
  };

  const options = [
    {
      label: fileTypes.CSV,
      onExport: onExportCsv,
    },
    {
      label: fileTypes.PDF,
      onExport: onExportPdf,
    },
    {
      label: fileTypes.JPEG,
      onExport: onExportJpeg,
    },
    {
      label: fileTypes.PNG,
      onExport: onExportPng,
    },
    {
      label: fileTypes.SVG,
      onExport: onExportSvg,
    },
  ];

  const onChooseOption = (onExport) => onExport();

  // for Dropdown Native
  /*   const onChooseOption = (chosenItemLabel) => {
    const chosenItem = exportOptionsToDisplay.find(option => option.label === chosenItemLabel); 
    chosenItem.onExport();
  }; */

  const optionsReducer = (state, action) => {
    switch (action.type) {
      case "update":
        return options.filter(({ label }) => exportOptions.includes(label));
      default:
        return [];
    }
  };
  const [exportOptionsToDisplay, dispatchExportOptionsToDisplay] = useReducer(
    optionsReducer,
    []
  );

  useEffect(() => {
    dispatchExportOptionsToDisplay({type: 'update'})
  }, []);

  return (
    <Fragment>
      <StyledExport
        className={className}
        options={exportOptionsToDisplay}
        optionKey="label"
        placeholder={"Export"}
        disabled={disabled}
        onChooseOption={(chosenItem) => onChooseOption(chosenItem.onExport)}
        // for Dropdown Native
        // onChooseOption={onChooseOption}
      />
      {exportOptions.includes(fileTypes.CSV) && (
        <CSVLink
          aria-hidden="true"
          style={{ visibility: "hidden" }}
          ref={exportCsvRef}
          data={csvData}
          filename={`${fileName}${fileTypes.CSV}`}
          target="_blank"
        />
      )}
    </Fragment>
  );
};

export default Export;
