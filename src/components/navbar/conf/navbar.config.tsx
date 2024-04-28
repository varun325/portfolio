import { MdHome, MdOutlineWorkOutline } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiCertificate } from "react-icons/pi";
import { GiSkills } from "react-icons/gi";

export const links = Object.freeze([
    {
        name: "Resume",
        to: "#",
    },
    {
        name: "Skills",
        to: "#skills",
    },
    {
        name: "Experience",
        to: "#experience",
    },
    {
        name: "Projects",
        to: "#",
    },
    {
        name: "Certifications",
        to: "#",
    },
]);

export const navItems = Object.freeze([
    {
        name: "Home",
        link: "#",
        icon: <MdHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        name: "Resume",
        link: "#resume",
        icon: (
            <IoDocumentTextOutline className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
    },
    {
        name: "Experience",
        link: "#experience",
        icon: (
            <MdOutlineWorkOutline className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
    },
    {
        name: "Projects",
        link: "",
        icon: (
            <GrProjects className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
    },
    {
        name: "Certifications",
        link: "",
        icon: (
            <PiCertificate className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
    },
    {
        name: "Skills",
        link: "#skills",
        icon: <GiSkills className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
]);
