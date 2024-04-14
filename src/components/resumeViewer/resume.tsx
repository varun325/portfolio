import { useState } from "react";
import { BsDownload } from "react-icons/bs";
import resumeUrl from "../../assets/VarunSharma2023_FRONTEND.pdf";

export function Resume() {
    const [isLoading, setIsLoading] = useState(true);

    // Function to handle iframe load event
    const handleLoad = () => {
        setIsLoading(false); // Set isLoading to false when iframe finishes loading
    };

    return (
        <div
            className="max-w-md mx-auto bg-[#18181B] p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg"
            style={{
                maxWidth: "850px",
                width: "90vw",
                height: "auto",
                overflow: "hidden",
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
                ></iframe>
            </div>
            <button aria-label="Download Resume">
                <BsDownload className="w-6 h-6" />
            </button>
        </div>
    );
}
