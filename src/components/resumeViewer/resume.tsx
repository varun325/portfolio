import { useState, useRef } from "react";
import { BsDownload, BsFullscreen, BsFullscreenExit } from "react-icons/bs";
import resumeUrl from "/VarunSharma2023_FRONTEND.pdf";
import PdfViewer from "./components/pdfViewer/pdfViewer";
import { MdOutlineFirstPage, MdOutlineLastPage } from "react-icons/md";

export default function Resume() {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const pdfContainerRef = useRef({} as HTMLDivElement);
    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const goToPreviousPage = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    const goToNextPage = () => {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1);
        }
    };
    const toggleFullScreen = () => {
        if (!isFullScreen) {
            // If not fullscreen, request fullscreen
            if (pdfContainerRef.current.requestFullscreen) {
                pdfContainerRef.current.requestFullscreen();
            }
        } else if (document.exitFullscreen) {
            // If already fullscreen, exit fullscreen
            document.exitFullscreen();
        }
        setIsFullScreen((prev) => !prev);
    };

    return (
        <div
            className="max-w-md mx-auto bg-[#18181B] p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg"
            style={{
                maxWidth: isFullScreen ? "70%" : "850px",
                width: "90vw",
                height: isFullScreen ? "80%" : "auto",
                overflow: "auto",
            }}
            ref={pdfContainerRef} // Set ref to the container
        >
            <h1 className="text-2xl font-bold mb-4">Resume Viewer</h1>
            <div
                className="border border-[#525252] p-4 mb-4"
                style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    position: "relative",
                    height: isFullScreen ? "90%" : "60%",
                    overflow: "scroll",
                }}
            >
                <PdfViewer
                    fileUrl={resumeUrl}
                    isFullScreen={isFullScreen}
                    setNumPages={setNumPages}
                    pageNumber={pageNumber}
                />
            </div>
            <div className="flex justify-between items-center">
                <a href={resumeUrl} download className="flex items-center">
                    <button aria-label="Download Resume">
                        <BsDownload className="w-6 h-6" />
                    </button>
                </a>
                <button
                    aria-label="go to previous page of resume"
                    onClick={goToPreviousPage}
                >
                    <MdOutlineFirstPage className="w-6 h-6" />
                </button>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
                <button
                    aria-label="go to next page of resume"
                    onClick={goToNextPage}
                >
                    <MdOutlineLastPage className="w-6 h-6" />
                </button>
                <button onClick={toggleFullScreen} className=" self-end">
                    {isFullScreen ? (
                        <BsFullscreenExit className="w-6 h-6" />
                    ) : (
                        <BsFullscreen className="w-6 h-6" />
                    )}
                </button>
            </div>
        </div>
    );
}
