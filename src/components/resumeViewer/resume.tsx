import { useState } from "react";
import { BsDownload, BsFullscreen, BsFullscreenExit } from "react-icons/bs";
import resumeUrl from "/VarunSharma2023_FRONTEND.pdf";

export default function Resume() {
    const [isLoading, setIsLoading] = useState(true);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const toggleFullScreen = () => {
        setIsFullScreen((isFullScreen) => !isFullScreen);
    };
    // Function to handle iframe load event
    const handleLoad = () => {
        setIsLoading(false); // Set isLoading to false when iframe finishes loading
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
        >
            <h1 className="text-2xl font-bold mb-4">Resume Viewer</h1>
            <div
                className="border border-[#525252] p-4 mb-4"
                style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    position: "relative",
                }}
            >
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-gray-400">Loading...</p>
                    </div>
                )}
                <iframe
                    title="Resume"
                    src={`${resumeUrl}#toolbar=0`}
                    width="100%"
                    height="100%"
                    allow="autoplay"
                    className={`w-full h-full ${isLoading ? "hidden" : ""}`}
                    onLoad={handleLoad}
                    allowFullScreen={true}
                ></iframe>
            </div>
            <div className="flex justify-between items-center">
                {/* Use justify-between to align one on the left and the other on the right */}
                <a href={resumeUrl} download className="flex items-center">
                    {/* Add items-center class to align the content vertically */}
                    <button aria-label="Download Resume">
                        <BsDownload className="w-6 h-6" />
                    </button>
                </a>
                <button
                    onClick={toggleFullScreen}
                    className="hidden sm:block sm:self-end self-end"
                >
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
