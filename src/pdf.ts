const pdf: boolean = navigator.pdfViewerEnabled;


export const getPDF = (): 'PDFviewerEnabled' | 'PDFviewerDisabled' => {
	if (pdf) {
		return 'PDFviewerEnabled';
	}
	else {
		return 'PDFviewerDisabled';
	}
};

const PDFviewerStatus = getPDF();

export { PDFviewerStatus };

