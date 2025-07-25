type Experience = {
    title: string;
    image: string;
    description: string;
    date: string;
    category?: string;
    skills?: string[];
};

export const ExperiencesList: Experience[] = [
    {
        title: "my experience",
        image: "",
        description: "",
        date: "",
        category: "header"
    },
    {
        title: "Ensign Infosecurity - Full Stack Developer (Internship)",
        image: "/assets/images/experience-4.jpg",
        description: "Currently working as a Full Stack Developer intern, gaining hands-on experience in modern web development technologies. Contributing to real-world projects while learning industry best practices and collaborative development workflows.",
        date: "Mar 2025 - Present",
        category: "internship",
        skills: ["Full Stack Development", "Web Technologies", "Team Collaboration"]
    },
    {
        title: "The Next Lap – Part-Time Tutor",
        image: "/assets/images/experience-1.jpg",
        description: "Educated students in Mathematics, English, and Science (Primary 1-6). Taught Mathematics, Chemistry, and Physics (Secondary 1-4). Customized lesson plans and leveraged academic experiences to enhance student learning outcomes through personalized teaching approaches.",
        date: "May 2024 - Apr 2025",
        category: "education",
        skills: ["Teaching", "Curriculum Development", "Student Mentoring", "Academic Planning"]
    },
    {
        title: "Friends2Gather Community Service – Mentor",
        image: "/assets/images/experience-2.jpg",
        description: "Partnered with Life Community Services Society to mentor children from underprivileged families. Built trusting relationships, provided emotional support, and designed engaging activities for weekly sessions. Focused on personal development and educational guidance.",
        date: "Jan 2024 - Dec 2024",
        category: "volunteer",
        skills: ["Mentoring", "Community Service", "Child Development", "Program Planning"]
    },
    {
        title: "Singapore Police Force – National Service",
        image: "/assets/images/experience-3.jpg",
        description: "Performed Border and Ground Patrol duties, collaborated with government agencies on security operations, managed events for officer welfare, and volunteered to mentor at-risk youths. Awarded multiple Commander's Awards and honored as 183rd Intake Valedictorian for outstanding service and leadership.",
        date: "Apr 2021 - Aug 2023",
        category: "service",
        skills: ["Leadership", "Security Operations", "Team Management", "Youth Mentoring", "Public Service"]
    },
];