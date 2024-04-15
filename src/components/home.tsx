import Socials from "./socials";
import { Experience } from "./experience/experience";
import NavBar from "./navbar/navbar";
import { experience_data } from "./experience/config/experience.config";
import { description } from "@/constants/description";
import ButtonBorderGlow from "./ui/buttonBorderGlow";
import Dialogue from "./ui/dialog";
import { useState, lazy, Suspense } from "react";
const Resume = lazy(() => import("./resumeViewer/resume"));
export default function Component() {
    const [isResumeDialogueOpen, setIsResumeDialogueOpen] = useState(false);
    const toggleResumeDialogue = () => {
        setIsResumeDialogueOpen(
            (isResumeDialogueOpen: boolean) => !isResumeDialogueOpen
        );
    };
    return (
        <div
            className="bg-black text-white min-h-screen flex flex-col"
            // style={{
            //     backgroundImage: "url('./src/assets/hero-pattern-dark.png')",
            // }}
        >
            <Dialogue
                isOpen={isResumeDialogueOpen}
                setIsOpen={toggleResumeDialogue}
            >
                {isResumeDialogueOpen && (
                    <Suspense fallback={<div>Loading Resume...</div>}>
                        <Resume />
                    </Suspense>
                )}
            </Dialogue>
            <header className="px-4 py-4 sm:px-20 sm:py-10">
                <NavBar toggleResumeDialogue={toggleResumeDialogue} />
            </header>
            {/* Main Content */}
            <main className="px-4 py-4 sm:px-20 sm:py-10 flex-1">
                <span className="bg-black-10 border border-2 border-green-500  text-white-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-black-900 dark:text-white-300">
                    Open to work
                </span>
                <div className="flex items-start">
                    <h1 className="w-full sm:w-3/4 text-4xl sm:text-8xl font-bold leading-tight mt-4">
                        Experienced Full Stack Engineer
                    </h1>
                </div>
                <section id="experience" className="mt-6 flex justify-end">
                    <div className="text-2xl w-full sm:w-1/2">
                        <p>{description}</p>
                        <div className="flex items-start items-center space-x-4 mt-4">
                            <ButtonBorderGlow
                                text="Contact me"
                                onClick={() => {}}
                            />
                            <div className="hidden sm:flex space-x-4">
                                <Socials />
                            </div>
                        </div>
                    </div>
                </section>
                <Experience experience_data={experience_data} />
            </main>
        </div>
    );
}
