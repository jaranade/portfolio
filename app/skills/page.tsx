import { Code, Database, Globe, Server, Cpu, Brain, PenToolIcon as Tool } from "lucide-react"
import { Card } from "@/components/ui/card"

const skills = [
  {
    category: "Programming Languages",
    description: "Core languages I use for development",
    items: ["C#", "Python", "JavaScript", "Java", "C++"],
    icon: Code,
  },
  {
    category: "Web Technologies",
    description: "Modern web development stack",
    items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
    icon: Globe,
  },
  {
    category: "Databases & Backend",
    description: "Data storage and server technologies",
    items: ["SQL", "MongoDB", ".NET", "RESTful APIs", "WCF Services"],
    icon: Database,
  },
  {
    category: "DevOps & Tools",
    description: "Development and deployment tools",
    items: ["Azure DevOps", "Git", "Docker", "CI/CD", "Postman"],
    icon: Server,
  },
  {
    category: "AI & Machine Learning",
    description: "Artificial Intelligence technologies",
    items: ["TensorFlow", "OpenCV", "NLP", "Neural Networks", "Computer Vision"],
    icon: Brain,
  },
  {
    category: "IoT & Hardware",
    description: "Hardware and IoT experience",
    items: ["IoT Protocols", "Embedded Systems", "Sensor Integration", "Real-time Systems"],
    icon: Cpu,
  },
  {
    category: "IDE and Tools",
    description: "Development environments and tools I use",
    items: ["Visual Studio", "Visual Studio Code", "PyCharm", "Git", "Docker", "Postman"],
    icon: Tool,
  },
]

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
          <Card key={index} className="p-6 bg-secondary/50 backdrop-blur-sm border-0">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 rounded-full bg-primary/10">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{skill.category}</h2>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            </div>
            <ul className="space-y-2">
              {skill.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  )
}

