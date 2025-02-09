import { Code, Database, Globe, Languages, Server } from "lucide-react";
export const SkillsList = [
    {
      category: "Frontend",
      icon: <Code className="w-6 h-6 text-blue-500" />,
      skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"],
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6 text-green-500" />,
      skills: ["Node.js", "Express.js", "FastAPI", "Django", "Spring Boot"],
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6 text-yellow-500" />,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"],
    },
    {
      category: "Technical Language",
      icon: <Globe className="w-6 h-6 text-purple-500" />,
      skills: ["Python", "Java", "C", "Bash", "PowerShell"],
    },
    {
      category: "Speaking Language",
      icon: <Languages className="w-6 h-6 text-red-500" />,
      skills: ["English", "Mandarin", "Malay"],
    },
  ];