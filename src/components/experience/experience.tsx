import { ExperienceData } from "./types/experience";
import { v4 as uuid } from "uuid";
export const Experience = ({
    experience_data,
}: {
    experience_data: ExperienceData[];
}) => {
    return (
        <>
            {experience_data.map((data) => (
                <div key={uuid()} className="mb-5">
                    <h2 className="text-[#FEF9C3]">{data.title}</h2>
                    <h3 className="pt-1">{data.date}</h3>
                    <ul className="text-[#D6D3D1]">
                        {data.experience_list.map((experience) => (
                            <li key={uuid()}>{experience}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
};
