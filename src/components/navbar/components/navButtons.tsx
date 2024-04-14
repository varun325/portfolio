interface NavButtonsProps {
    toggleResumeDialogue: () => void;
    setIsMenuOpen?: (isMenuOpen: boolean) => void;
}
export default function NavButtons({
    toggleResumeDialogue,
    setIsMenuOpen,
}: Readonly<NavButtonsProps>) {
    return (
        <>
            <button
                className="text-white flex items-center font-semibold hover:underline-none"
                onClick={() => {
                    toggleResumeDialogue();
                    if (setIsMenuOpen) setIsMenuOpen(false);
                }}
            >
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
        </>
    );
}
