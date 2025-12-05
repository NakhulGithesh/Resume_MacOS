import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there! I'm a dragon lost in human world..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Here are some status about my github account..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "agenticmeet-ai",
        title: "AgenticMeet-AI",
        file: "https://raw.githubusercontent.com/NakhulGithesh/AgenticMeet-AI/main/README.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "AI meeting assistant for insights.",
        link: "https://github.com/NakhulGithesh/AgenticMeet-AI.git"
      },
      {
        id: "agentic-eye-ai",
        title: "AgenticEye-AI",
        file: "https://raw.githubusercontent.com/NakhulGithesh/Agentic_Eye_AI/main/README.md",
        icon: "i-heroicons-solid:eye",
        excerpt: "Phone mirror with eye tracking control for accessibility.",
        link: "https://github.com/NakhulGithesh/Agentic_Eye_AI.git"
      },
      {
        id: "ai-checkers",
        title: "AI Checkers",
        file: "https://raw.githubusercontent.com/NakhulGithesh/AI-checkers/main/README.md",
        icon: "i-bx:chess",
        excerpt: "AI Checkers with Minimax and Q-learning.",
        link: "https://github.com/NakhulGithesh/AI-checkers.git"
      },
      {
        id: "fire-detection",
        title: "Fire Detection Sys",
        file: "https://raw.githubusercontent.com/NakhulGithesh/Fire_detection-/main/README.md",
        icon: "i-heroicons-solid:fire",
        excerpt: "YOLO fire detection with alerts.",
        link: "https://github.com/NakhulGithesh/Fire_detection-.git"
      },
      {
        id: "garbage-algorithm",
        title: "Garbage Algorithm",
        file: "https://raw.githubusercontent.com/NakhulGithesh/garbage_algorithm/main/README.md",
        icon: "i-heroicons-solid:trash",
        excerpt: "Python implementations of optimization algorithms for TSP.",
        link: "https://github.com/NakhulGithesh/garbage_algorithm.git"
      },
      {
        id: "snake-game",
        title: "AI vs Player Snake Game",
        file: "https://raw.githubusercontent.com/NakhulGithesh/snake-game-/main/README.md",
        icon: "i-game-icons:snake",
        excerpt: "React-based Snake game where you compete against AI.",
        link: "https://github.com/NakhulGithesh/snake-game-.git"
      }
    ]
  }
];

export default bear;
