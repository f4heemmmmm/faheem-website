// Import Statements
import { motion } from "framer-motion";
import { SkillsList } from "../SkillsList";

function Skills() {
    return (
        <div className = "max-w-3xl mx-auto px-6 relative">
            <motion.h2
                className = "text-6xl font-bold text-center mb-10"
                initial = {{ opacity: 0, y: -50 }}
                animate = {{ opacity: 1, y: 0 }}
                transition = {{ duration: 0.5 }}
            >
                my <br /> skills
            </motion.h2>
            <div className = "space-y-6 flex flex-col items-center">
                {SkillsList.map((skill, index) => (
                    <motion.div
                        key = {index}
                        className = "rounded-lg w-full max-w-md border border-gray-700 text-left overflow-hidden"
                        style = {{
                            background: "#1E1E1E",
                            fontFamily: "monospace",
                            color: "#D4D4D4",
                            borderRadius: "5px",
                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)"
                        }}
                        initial = {{ opacity: 0, y: 20 }}
                        animate = {{ opacity: 1, y: 0 }}
                        whileHover = {{ scale: 1.05 }}
                        transition = {{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className = "flex items-center bg-gray-800 px-4 py-2 border-b border-gray-700">
                            <div className = "flex space-x-2">
                                <span className = "w-3 h-3 bg-red-500 rounded-full" />
                                <span className = "w-3 h-3 bg-yellow-500 rounded-full" />
                                <span className = "w-3 h-3 bg-green-500 rounded-full" />
                            </div>
                            <span className = "ml-3 text-gray-300 text-lg font-bold"> {skill.category.toLowerCase()}.sh </span>
                        </div>
                        <div className = "p-4">
                            <p className = "text-sm text-gray-400"> $ cat {skill.category.toLowerCase()}.txt </p>
                            <div className = "mt-2 text-sm">
                                {skill.skills.map((item, i) => (
                                    <motion.p
                                        key = {i}
                                        whileHover = {{ scale: 1.02 }}
                                        transition = {{ type: "spring", stiffness: "300" }}
                                        className = "text-green-400 mt-4"
                                    >
                                        {`> ${item}`}
                                    </motion.p>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;