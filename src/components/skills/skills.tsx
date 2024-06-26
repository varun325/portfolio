interface SkillInterface {
    title: string;
    description: string;
    skills: string[];
}

export default function Skills({
    skillsData,
}: Readonly<{ skillsData: SkillInterface[] }>) {
    const renderSkills = () => {
        const rows = [];
        let rowSize = 2; // Set the row size to 2 columns

        for (let i = 0; i < skillsData.length; i += rowSize) {
            const row = skillsData.slice(i, i + rowSize);
            rows.push(
                <div
                    key={`row-${i}`}
                    className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 mb-4"
                >
                    {row.map((skill) => (
                        <div
                            key={skill.title}
                            className="w-full sm:w-1/2 border border-4 p-4 border-[#525252] rounded-2xl hover:shadow-md hover:shadow-[#525252]"
                        >
                            <h1 className="break-words text-[#FEF9C3]">
                                {skill.title}
                            </h1>
                            <p>{skill.description}</p>
                            <ul className="px-3 text-[#D6D3D1]">
                                {skill.skills.map((s) => (
                                    <li key={s}>{s}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            );
        }
        return rows;
    };

    return <>{renderSkills()}</>;
}
