import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function fadeContentInClass(visible: boolean): string {
    return `transition-opacity ease-in duration-700 ${
        visible ? "opacity-100" : "opacity-0"
    }`;
}
