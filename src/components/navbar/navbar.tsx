import { useState } from "react";
import { MdClose } from "react-icons/md";
import Socials from "../socials";
import NavButtons from "./components/navButtons";
import ButtonBorderGlow from "../ui/buttonBorderGlow";
import HamburgerIcon from "../icons/hamburgerIcon";
interface NavBarProps {
    toggleResumeDialogue: () => void;
}
export default function NavBar({toggleResumeDialogue}: Readonly<NavBarProps>) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="flex justify-end">
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
                        <HamburgerIcon />
                    )}
                </button>
            </div>
            {/* Navigation */}
            <nav className="hidden sm:flex items-center space-x-6">
                <NavButtons toggleResumeDialogue={toggleResumeDialogue}/>
                <ButtonBorderGlow text="Contact me 👋" />
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
                        <NavButtons toggleResumeDialogue={toggleResumeDialogue} setIsMenuOpen={setIsMenuOpen}/>
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
