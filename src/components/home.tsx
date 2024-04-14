import Socials from "./socials";
import { Experience } from "./experience/experience";
import NavBar from "./navbar";
import { experience_data } from "./experience/config/experience.config";
import { description } from "@/constants/description";
export default function Component() {
    return (
        <div
            className="bg-black text-white min-h-screen flex flex-col"
            // style={{
            //     backgroundImage: "url('./src/assets/hero-pattern-dark.png')",
            // }}
        >
            <header className="px-4 py-4 sm:px-20 sm:py-10">
                <NavBar />
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
                <section className="mt-6 flex justify-end">
                    <div className="text-2xl w-full sm:w-1/2">
                        <p>{description}</p>
                        <div className="flex items-start items-center space-x-4 mt-4">
                            <button className="p-[3px] relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                                <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                                    Contact me
                                </div>
                            </button>
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
