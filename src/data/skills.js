import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaCode,
} from "react-icons/fa";

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      ,
    ],
  },
  {
    category: "Programming",
    items: [
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" }
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "GitHub", icon: FaGithub, color: "text-white" },
      { name: "VS Code", icon: FaCode, color: "text-blue-400" },
      { name: "IntelliJ IDEA", icon: FaCode, color: "text-pink-500" },
    ],
  },
];