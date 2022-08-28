let pdf: boolean = navigator.pdfViewerEnabled;


export const getPDF = ({ pdf }: { pdf: boolean; }): "PDFviewerEnabled" | "PDFviewerDisabled" => {
    if (pdf) {
        return "PDFviewerEnabled";
    }
    else {
        return "PDFviewerDisabled";
    }
}

let PDFviewerStatus = getPDF({ pdf });

export { PDFviewerStatus };