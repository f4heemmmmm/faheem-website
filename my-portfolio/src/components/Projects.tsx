type Project = {
    title: string;
    description: string;
    image: string;
    fullDescription: string[];
    website?: string; // Optional because some projects don't have it
  };

export const Projects = [
    {
      title: "RallyRank",
      description: "Tennis Matchmaking and Tournament Management System",
      image: "/assets/images/projects-1.jpg",
      fullDescription: [
        "Collaborated as a team to create a platform using Agile methodologies to provide tools for tennis players and RallyRank administrators.",
        "Designed features for administrators to perform CRUD operations on tournaments and players, including automatic matchmaking for players using a custom Elo ranking algorithm for fair competition.",
        "Engineered an interactive and user-friendly interface using React, JSX, and Axios, with tools to streamline code design such as JavaScript and Tailwind CSS. [Frontend]",
        "Developed and implemented a monolithic architecture using Spring Boot and MongoDB for database management. [Backend]",
        "Refined technical skills whilst working as a group or in a pair (through pair programming), to improve code design and structure."
      ],
      website: "https://rally-rank-frontend.web.app/"
    },
    {
      title: "HundredForNow",
      description: "An original card game, in Java programming language.",
      image: "/assets/images/projects-2.jpg",
      fullDescription: [
        "Developed a unique card game in Java.",
        "Implemented game mechanics, logic, and UI elements for an engaging player experience."
      ]
    },
    {
      title: "Knightsbridge House",
      description: "Designed and developed the official website for Knightsbridge House, creating a user-friendly and visually engaging platform to showcase its educational programs and mission.",
      image: "/assets/images/projects-3.jpg",
      fullDescription: [
        "Designed and built a responsive website for Knightsbridge House.",
        "Incorporated modern UI/UX principles to ensure seamless navigation and an intuitive user experience."
      ]
    },
];
