import { Experience } from "./experience/experience";
import NavBar from "./navbar/navbar";
import { experience_data } from "./experience/config/experience.config";
import Dialogue from "./ui/dialog";
import { useState, lazy, Suspense } from "react";
import About from "./about";
import Section from "./section";
import Skills from "./skills/skills";
import { skillsData } from "./skills/config/skills.config";
const Resume = lazy(() => import("./resumeViewer/resume"));
export default function Component() {
    const [isResumeDialogueOpen, setIsResumeDialogueOpen] = useState(false);
    const toggleResumeDialogue = () => {
        setIsResumeDialogueOpen(
            (isResumeDialogueOpen: boolean) => !isResumeDialogueOpen
        );
    };
    return (
        <div className="bg-black text-white min-h-screen flex flex-col">
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
                <section id="about">
                    <About />
                </section>
                <Section sectionTitle="Work Experience" id="experience">
                    <Experience experience_data={experience_data} />
                </Section>
                <Section sectionTitle="Skills" id="skills">
                    <Skills skillsData={skillsData} />
                </Section>
                <section></section>
            </main>
        </div>
    );
}
