import { Dispatch, SetStateAction } from "react";
import { Document, Page, pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/build/pdf.worker.min.js',
//     import.meta.url,
//   ).toString();
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PdfViewerProps {
    fileUrl: string;
    isFullScreen?: boolean;
    numPages?: number;
    setNumPages: Dispatch<SetStateAction<number>>;
    pageNumber: number;
    setPageNumber?: Dispatch<SetStateAction<number>>;
}
function handleScale(isFullScreen: boolean, isDesktop: boolean): number {
    if (isFullScreen) {
        return isDesktop ? 2.4 : 1.8;
    } else {
        return isDesktop ? 1.2 : 0.9;
    }
}

export default function PdfViewer({
    fileUrl,
    isFullScreen,
    setNumPages,
    pageNumber,
}: Readonly<PdfViewerProps>) {
    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    const isDesktop = window.innerWidth > 768;

    return (
        <div>
            <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
                <Page
                    scale={handleScale(!!isFullScreen, isDesktop)}
                    pageNumber={pageNumber}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                />
            </Document>
        </div>
    );
}
