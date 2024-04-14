import { useState } from "react";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { MdClose } from "react-icons/md";
import Socials from "../socials";
import NavButtons from "./components/navButtons";
import ButtonBorderGlow from "../ui/buttonBorderGlow";
import HamburgerIcon from "../icons/hamburgerIcon";
export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="flex justify-between items-center">
            {/* Avatar and Badge */}
            <div className="flex items-center space-x-4">
                <Avatar>
                    <AvatarImage alt="Profile image" src="" />
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
                        <HamburgerIcon />
                    )}
                </button>
            </div>
            {/* Navigation */}
            <nav className="hidden sm:flex items-center space-x-6">
                <NavButtons />
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
                        <NavButtons />
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
