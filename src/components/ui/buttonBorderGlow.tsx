interface ButtonProps {
    text?: string;
    onClick?: () => void;
    rounded?: boolean;
}

const defaultProps: ButtonProps = {
    text: "Button",
    onClick: () => {},
    rounded: false,
};

export default function ButtonBorderGlow({
    text = defaultProps.text,
    onClick = defaultProps.onClick,
    rounded = defaultProps.rounded,
}: Readonly<ButtonProps>) {
    return (
        <button className="p-[3px] relative" onClick={onClick}>
            <div className={`absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-${rounded?'full':'lg'}`} />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                {text}
            </div>
        </button>
    );
}
