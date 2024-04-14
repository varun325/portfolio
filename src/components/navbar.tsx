import { useState } from "react";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { MdClose } from "react-icons/md";
import Socials from "./socials";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="flex justify-between items-center">
            {/* Avatar and Badge */}
            <div className="flex items-center space-x-4">
                <Avatar>
                    <AvatarImage
                        alt="Profile image"
                        src=""
                    />
                </Avatar>
            </div>
            {/* Hamburger Menu */}
            <div className="sm:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white"
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? (
                        <MdClose className="w-6 h-6" />
                    ) : (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    )}
                </button>
            </div>
            {/* Navigation */}
            <nav className="hidden sm:flex items-center space-x-6">
                <button className="text-white flex items-center font-semibold hover:underline-none">
                    Resume
                </button>
                <button className="text-white flex items-center font-semibold hover:underline-none">
                    Skills
                </button>
                <button className="text-white flex items-center font-semibold hover:underline-none">
                    Experience
                </button>
                <button className="text-white flex items-center font-semibold hover:underline-none">
                    Projects
                </button>
                <button className="text-white flex items-center font-semibold hover:underline-none">
                    Certifications
                </button>
                <button className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                        Contact me 👋
                    </div>
                </button>
            </nav>
            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div
                    className={`sm:hidden flex flex-col fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex flex-col items-start justify-center overflow-x-hidden`}
                >
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-4 right-4 text-white"
                    >
                        <MdClose className="w-6 h-6" />
                    </button>
                    <div className="flex flex-col items-start p-4 space-y-4">
                        <button className="text-white flex items-center font-semibold hover:underline-none">
                            Resume
                        </button>
                        <button className="text-white flex items-center font-semibold hover:underline-none">
                            Skills
                        </button>
                        <button className="text-white flex items-center font-semibold hover:underline-none">
                            Experience
                        </button>
                        <button className="text-white flex items-center font-semibold hover:underline-none">
                            Projects
                        </button>
                        <button className="text-white flex items-center font-semibold hover:underline-none">
                            Certifications
                        </button>
                    </div>
                    {/* Icons */}
                    <div className="flex flex-col items-end p-4 space-y-4 self-end">
                        <Socials />
                    </div>
                </div>
            )}
        </div>
    );
}
