"use client";

import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  Cpu, 
  Brain,
  LayoutTemplate,
  GitBranch,
  Terminal,
  Monitor
} from "lucide-react";
import AnimatedSkillCard from "@/components/AnimatedSkillCard";

const skills = [
  {
    category: "Programming Languages",
    description: "Core languages I use for development",
    items: ["C#", "Python", "JavaScript", "Java", "C++"],
    icon: Code,
    logos: [
      <Code key="1" className="h-4 w-4" />,
      <Terminal key="2" className="h-6 w-6 dark:text-white" />,
      <GitBranch key="3" className="h-8 w-8 dark:text-white" />,
      <Monitor key="4" className="h-6 w-6" />,
      <Code key="5" className="h-4 w-4" />
    ]
  },
  {
    category: "Web Technologies",
    description: "Modern web development stack",
    items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
    icon: Globe,
    logos: [
      <Globe key="1" className="h-4 w-4" />,
      <LayoutTemplate key="2" className="h-6 w-6 dark:text-white" />,
      <Server key="3" className="h-8 w-8 dark:text-white" />,
      <Brain key="4" className="h-6 w-6" />,
      <Database key="5" className="h-4 w-4" />
    ]
  },
  {
    category: "Databases & Backend",
    description: "Data storage and server technologies",
    items: ["SQL", "MongoDB", ".NET", "RESTful APIs", "WCF Services"],
    icon: Database,
    logos: [
      <Database key="1" className="h-4 w-4" />,
      <Server key="2" className="h-6 w-6 dark:text-white" />,
      <Cpu key="3" className="h-8 w-8 dark:text-white" />,
      <Globe key="4" className="h-6 w-6" />,
      <Terminal key="5" className="h-4 w-4" />
    ]
  },
  {
    category: "DevOps & Tools",
    description: "Development and deployment tools",
    items: ["Azure DevOps", "Git", "Docker", "CI/CD", "Postman"],
    icon: Server,
    logos: [
      <Server key="1" className="h-4 w-4" />,
      <GitBranch key="2" className="h-6 w-6 dark:text-white" />,
      <Database key="3" className="h-8 w-8 dark:text-white" />,
      <Terminal key="4" className="h-6 w-6" />,
      <Globe key="5" className="h-4 w-4" />
    ]
  },
  {
    category: "AI & Machine Learning",
    description: "Artificial Intelligence technologies",
    items: ["TensorFlow", "OpenCV", "NLP", "Neural Networks", "Computer Vision"],
    icon: Brain,
    logos: [
      <Brain key="1" className="h-4 w-4" />,
      <Cpu key="2" className="h-6 w-6 dark:text-white" />,
      <Code key="3" className="h-8 w-8 dark:text-white" />,
      <Monitor key="4" className="h-6 w-6" />,
      <Terminal key="5" className="h-4 w-4" />
    ]
  },
  {
    category: "IoT & Hardware",
    description: "Hardware and IoT experience",
    items: ["IoT Protocols", "Embedded Systems", "Sensor Integration", "Real-time Systems"],
    icon: Cpu,
    logos: [
      <Cpu key="1" className="h-4 w-4" />,
      <Server key="2" className="h-6 w-6 dark:text-white" />,
      <Globe key="3" className="h-8 w-8 dark:text-white" />,
      <Database key="4" className="h-6 w-6" />,
      <Monitor key="5" className="h-4 w-4" />
    ]
  }
];

export default function Skills() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Skills & Expertise</h1>
        <p className="text-muted-foreground">
          A comprehensive overview of my technical capabilities and areas of expertise
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <AnimatedSkillCard
            key={index}
            title={skill.category}
            description={skill.description}
            items={skill.items}
            icon={skill.icon}
            logoComponents={skill.logos}
          />
        ))}
      </div>
    </div>
  );
}