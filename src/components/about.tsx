import { description } from "@/constants/description";
import Socials from "./socials";
import ButtonBorderGlow from "./ui/buttonBorderGlow";

export default function About(): JSX.Element {
    return (
        <>
            <div className="flex items-start">
                <h1 className="w-full sm:w-3/4 text-4xl sm:text-8xl font-bold leading-tight mt-4">
                    Experienced Full Stack Engineer
                </h1>
            </div>
            <div className="mt-6 flex justify-end">
                <div className="text-2xl w-full sm:w-1/2">
                    <p>{description}</p>
                    <div className="flex items-start items-center space-x-4 mt-4">
                        <ButtonBorderGlow
                            text="Contact me"
                            onClick={() => {}}
                        />
                        <div className="hidden sm:flex space-x-4">
                            <Socials />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
