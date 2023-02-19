import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const DownloadPage = (rootsElementId, downloadFileName) => {
  const downloadFileDocument = () => {
    const input = document.getElementById(rootsElementId);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a3");
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save(`${downloadFileName}`);
    });
  };
  return (
    <div>
      <button onClick={downloadFileDocument}>Download Page</button>
    </div>
  );
};

export default DownloadPage;
