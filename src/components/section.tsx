import { useIsVisible } from "@/hooks/useIsVisible";
import { fadeContentInClass } from "@/lib/utils";
import { useRef } from "react";

interface SectionProps {
    children: React.ReactNode;
    sectionTitle: string;
    id?: string;
}
export default function Section({
    children,
    sectionTitle,
    id = "",
}: Readonly<SectionProps>) {
    const sectionRef = useRef<HTMLElement>(document.createElement("section"));
    const isSectionVisible = useIsVisible(sectionRef);
    return (
        <section
            id={id}
            ref={sectionRef}
            className={fadeContentInClass(isSectionVisible)}
        >
            <div className="flex flex-col justify-center items-start mt-10 bg-black-10 gap-4 sm:flex-row">
                <h1 className="w-full sm:w-1/2">{sectionTitle}</h1>
                <div className="w-full sm:w-1/2">{children}</div>
            </div>
        </section>
    );
}
