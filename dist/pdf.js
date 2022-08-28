let pdf = navigator.pdfViewerEnabled;
export const getPDF = ({ pdf }) => {
    if (pdf) {
        return "PDFviewerEnabled";
    }
    else {
        return "PDFviewerDisabled";
    }
};
let PDFviewerStatus = getPDF({ pdf });
export { PDFviewerStatus };
