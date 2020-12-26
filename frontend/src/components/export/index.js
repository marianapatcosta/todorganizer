import React, { useEffect, useState, useRef } from "react";
import { CSVLink } from "react-csv";
import { toPng, toJpeg, toSvg } from "html-to-image";
import { jsPDF } from "jspdf";
import {
  documentFormat,
  documentOrientation,
  fileTypes,
} from "../../constants";
import {
  StyledExport,
  StyledExportOptions,
  StyledExportOption,
  StyledExportWrapper,
} from "./StyledExport";

const Export = ({
  className,
  exportOptions,
  label,
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [exportOptionsToDisplay, setExportOptionsToDisplay] = useState([]);

  const toggleExpansion = () =>
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);

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

  const onOptionClick = (onExport) => {
    toggleExpansion();
    onExport();
  };

  useEffect(() => {
    setExportOptionsToDisplay(
      options.filter(({ label }) => exportOptions.includes(label))
    );
  }, []);

  return (
    <StyledExportWrapper className={className}>
      <StyledExport
        label={label}
        disabled={disabled}
        onClick={toggleExpansion}
      ></StyledExport>
      {isExpanded && (
        <StyledExportOptions>
          {exportOptionsToDisplay.map(({ label, onExport }, index) => (
            <StyledExportOption
              key={index * Math.random()}
              onClick={() => onOptionClick(onExport)}
            >
              {label}
            </StyledExportOption>
          ))}
        </StyledExportOptions>
      )}
      {exportOptions.includes(fileTypes.CSV) && (
        <CSVLink
          ref={exportCsvRef}
          data={csvData}
          filename={`${fileName}${fileTypes.CSV}`}
          target="_blank"
        />
      )}
    </StyledExportWrapper>
  );
};

export default Export;
