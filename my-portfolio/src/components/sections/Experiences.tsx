// Import Statement
import React from "react";
import ExperienceCard from "../ExperienceCard";
import { ExperiencesList } from "../ExperiencesList";

function Experiences() {
    return (
        <div className = "max-w-6xl mx-auto px-6 items-center justify-center">
            <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {ExperiencesList.map((exp, index) => (
                    <ExperienceCard key = {index} experience = {exp} index = {index} />
                ))}
            </div>
        </div>
    );
};

export default Experiences;