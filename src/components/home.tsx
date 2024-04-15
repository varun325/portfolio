import { Experience } from "./experience/experience";
import NavBar from "./navbar/navbar";
import { experience_data } from "./experience/config/experience.config";
import Dialogue from "./ui/dialog";
import { useState, lazy, Suspense, useRef } from "react";
import About from "./about";
import { useIsVisible } from "@/hooks/useIsVisible";
import { fadeContentInClass } from "@/lib/utils";
const Resume = lazy(() => import("./resumeViewer/resume"));
export default function Component() {
    const experienceRef = useRef<HTMLElement>(
        document.createElement("section")
    );
    const isExperienceVisible = useIsVisible(experienceRef);
    const aboutRef = useRef<HTMLElement>(document.createElement("section"));
    const isAboutVisible = useIsVisible(aboutRef);
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
                <section
                    id="about"
                    ref={aboutRef}
                    className={fadeContentInClass(isAboutVisible)}
                >
                    <About />
                </section>
                <section
                    id="experience"
                    ref={experienceRef}
                    className={fadeContentInClass(isExperienceVisible)}
                >
                    <Experience experience_data={experience_data} />
                </section>
            </main>
        </div>
    );
}
