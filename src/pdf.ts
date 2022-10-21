const pdf: boolean = navigator.pdfViewerEnabled;

export const getPDF = (): 'PDFviewerEnabled' | 'PDFviewerDisabled' => {
	if (pdf) {
		return 'PDFviewerEnabled';
	}
	return 'PDFviewerDisabled';
};

const PDFviewerStatus = getPDF();

export { PDFviewerStatus };
