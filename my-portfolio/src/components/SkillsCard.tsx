
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";



const SkillsCard = ({ skill, index }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0.2 1", "0.8 0"], // Adjusts the scroll trigger points
    });
  
    // Diagonal platform positioning
    const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -100 : 100, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.05]);
    const rotate = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -10 : 10, 0]);
    const skew = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -5 : 5, 0]);
  
    return (
      <motion.div
        ref={ref}
        style={{ x, y, scale, rotate, skew }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
        className="relative p-6 w-[65%] max-w-md mx-auto bg-gray-900 rounded-lg shadow-xl border border-gray-700 transition-all duration-300"
      >
        {/* Code Editor Header */}
        <div className="flex items-center justify-between bg-gray-800 px-3 py-2 rounded-t-lg">
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <span className="text-sm text-gray-400">{skill.category}.js</span>
        </div>
  
        {/* Skills Content */}
        <div className="mt-4">
          <h3 className="text-xl font-semibold flex items-center space-x-2">
            <span className="text-blue-400 text-2xl">{skill.icon}</span>
            <span>{skill.category}</span>
          </h3>
          <ul className="mt-2 text-gray-300 text-sm">
            {skill.skills.map((s, i) => (
              <li key={i} className="py-1 pl-4 border-l-2 border-blue-500">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  };
  export default SkillsCard;