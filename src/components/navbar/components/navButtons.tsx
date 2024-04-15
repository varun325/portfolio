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
    buttonMap.set("Resume", toggleResumeDialogue);
    return (
        <>
            {links.map((link) => (
                <a key={link.name} href={link.to} className="no-underline">
                    <button
                        className="text-white flex items-center font-semibold hover:underline-none"
                        onClick={() => {
                            const handler = buttonMap.get(link.name);
                            if (handler) handler();
                            if (setIsMenuOpen) setIsMenuOpen(false);
                        }}
                    >
                        {link.name}
                    </button>
                </a>
            ))}
        </>
    );
}
