import { MdClose } from "react-icons/md";

interface DialogueProps {
    children?: React.ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}
export default function Dialogue({
    isOpen,
    setIsOpen,
    children,
}: Readonly<DialogueProps>) {
    return (
        isOpen && (
            <div
                className={`flex flex-col fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex flex-col items-start justify-center overflow-x-hidden`}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-white"
                >
                    <MdClose className="w-6 h-6" />
                </button>
                <div className="flex items-center justify-center w-full h-full">
                    <div className="m-auto">{children}</div>
                </div>
            </div>
        )
    );
}
