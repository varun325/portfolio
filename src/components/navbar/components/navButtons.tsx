import { links } from "../conf/navbar.config";
interface NavButtonsProps {
    toggleResumeDialogue: () => void;
    setIsMenuOpen?: (isMenuOpen: boolean) => void;
}
const buttonMap = new Map<string, () => void>();

export default function NavButtons({
    toggleResumeDialogue,
    setIsMenuOpen,
}: Readonly<NavButtonsProps>) {
    const toggleResumeViewer = () => {
        toggleResumeDialogue();
        if (setIsMenuOpen) setIsMenuOpen(false);
    };
    buttonMap.set("Resume", toggleResumeViewer);
    return (
        <>
            {links.map((link) => (
                <a key={link.name} href={link.to} className="no-underline">
                    <button
                        className="text-white flex items-center font-semibold hover:underline-none"
                        onClick={buttonMap.get(link.name)}
                    >
                        {link.name}
                    </button>
                </a>
            ))}
        </>
    );
}
