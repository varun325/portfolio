import { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { v4 as uuid } from "uuid";

const preventClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
};
const buttonMap = new Map<string, (args?: any) => void>();
buttonMap.set("", preventClick);
export const FloatingNav = ({
    navItems,
    className,
    toggleResume,
}: {
    readonly navItems: readonly {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
    toggleResume: () => void;
}) => {
    const { scrollYProgress } = useScroll();
    buttonMap.set("#resume", () => {
        toggleResume();
        setVisible(false);
    });
    const [visible, setVisible] = useState(false);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            if (scrollYProgress.get() > 0.05) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex max-w-fit  fixed bottom-10 inset-x-0 mx-auto border border-white/[0.5] dark:border-white/[0.2] rounded-full dark:bg-black bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
                    className
                )}
            >
                {navItems.map((navItem: any) => (
                    <a
                        key={uuid()}
                        href={navItem.link}
                        onClick={buttonMap.get(navItem.link)}
                        className={cn(
                            "no-underline relative dark:text-neutral-50 items-center flex space-x-1 text-[#FEF9C3] dark:hover:text-neutral-300 hover:text-neutral-500"
                        )}
                    >
                        <span className="block sm:hidden">{navItem.icon}</span>
                        <span className="hidden sm:block text-sm">
                            {navItem.name}
                        </span>
                    </a>
                ))}
                <button className=" bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full py-2 px-4">
                    <span>Contact me</span>
                </button>
                <span className="absolute inset-x-0 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
            </motion.div>
        </AnimatePresence>
    );
};
