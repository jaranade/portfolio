"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import CodeBlock from "@/components/ui/code-block"
import { useState } from "react"
import { IconCloud } from "@/components/IconCloud"
import {
  SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, 
  SiNodedotjs, SiMongodb, SiMysql, SiDotnet, 
  SiCypress, SiJest, SiSelenium, SiPostman,
  SiPython, SiGithub, SiDocker,
  SiKubernetes,
  SiGraphql, SiFigma, SiFirebase, SiRedux,
  
} from "react-icons/si"

interface Developer {
  name: string
  about: string
  skills: { category: string; items: string[] }[]
  passions: string[]
}

const Joshua: Developer = {
  name: "Joshua Ranade",
  about: `Hello! I'm Joshua Ranade, I build things that work and break things that don't—whether it's writing clean code, automating workflows, or experimenting with AI projects. Efficiency and simplicity are my end goals, always.`,
  skills: [
    {
      category: "Full-Stack Development",
      items: ["JavaScript/TypeScript", "Node.js", "React", "Next.js", "MongoDB", "MySQL", ".NET Core", "ASP.NET"],
    },
    {
      category: "Web Development & Design",
      items: ["Responsive Design", "UI/UX", "CSS/SASS", "Tailwind CSS", "Figma", "Adobe XD"],
    },
    {
      category: "API & Integration",
      items: ["REST APIs", "GraphQL", "gRPC", "WCF", "YARP", "SOAP", "WebSockets"],
    },
    {
      category: "Automation Testing",
      items: ["Selenium", "Cypress", "Jest", "NUnit", "xUnit", "Postman"],
    },
  ],
  passions: ["Clean Code", "System Integration", "UI/UX Design", "Basketball", "Gaming", "Community Projects"],
}

const developerCode = `interface Developer {
  name: string
  about: string
  skills: { category: string; items: string[] }[]
  passions: string[]
}

const Joshua: Developer = {
  name: "Joshua Ranade",
  about: \`Hello! I'm Joshua Ranade, I build things that work and break things that don't—
whether it's writing clean code, automating workflows, or experimenting with AI projects. 
Efficiency and simplicity are my end goals, always.\`,
  skills: [
    {
      category: "Full-Stack Development",
      items: [
        "JavaScript/TypeScript", "Node.js", "React", "Next.js",
        "MongoDB", "MySQL", ".NET Core", "ASP.NET"
      ]
    },
    {
      category: "Web Development & Design",
      items: [
        "Responsive Design", "UI/UX", "CSS/SASS",
        "Tailwind CSS", "Figma", "Adobe XD"
      ]
    },
    {
      category: "API & Integration",
      items: [
        "REST APIs", "GraphQL", "gRPC", "WCF",
        "YARP", "SOAP", "WebSockets"
      ]
    },
    {
      category: "Automation Testing",
      items: [
        "Selenium", "Cypress", "Jest",
        "NUnit", "xUnit", "Postman"
      ]
    }
  ],
  passions: [
    "Clean Code", "System Integration", "UI/UX Design",
    "Basketball", "Gaming", "Community Projects"
  ]
}`

export default function Home() {
  const [codeComplete, setCodeComplete] = useState(false)

  const techIcons = [
    <SiReact key="react" size={65} style={{ color: '#61DAFB' }} />,
    <SiTypescript key="ts" size={65} style={{ color: '#3178C6' }} />,
    <SiNextdotjs key="next" size={65} style={{ color: '#ffffff' }} />,
    <SiTailwindcss key="tailwind" size={65} style={{ color: '#06B6D4' }} />,
    <SiNodedotjs key="node" size={65} style={{ color: '#339933' }} />,
    <SiMongodb key="mongodb" size={65} style={{ color: '#47A248' }} />,
    <SiMysql key="mysql" size={65} style={{ color: '#4479A1' }} />,
    <SiDotnet key="dotnet" size={65} style={{ color: '#512BD4' }} />,
    <SiCypress key="cypress" size={65} style={{ color: '#17202C' }} />,
    <SiJest key="jest" size={65} style={{ color: '#C21325' }} />,
    <SiSelenium key="selenium" size={65} style={{ color: '#43B02A' }} />,
    <SiPostman key="postman" size={65} style={{ color: '#FF6C37' }} />,
    <SiPython key="python" size={65} style={{ color: '#3776AB' }} />,
    
    <SiGithub key="github" size={65} style={{ color: '#ffffff' }} />,
    <SiDocker key="docker" size={65} style={{ color: '#2496ED' }} />,
    <SiKubernetes key="k8s" size={65} style={{ color: '#326CE5' }} />,
  
    <SiGraphql key="graphql" size={65} style={{ color: '#E10098' }} />,
    <SiFigma key="figma" size={65} style={{ color: '#F24E1E' }} />,
    <SiFirebase key="firebase" size={65} style={{ color: '#FFCA28' }} />,
    <SiRedux key="redux" size={65} style={{ color: '#764ABC' }} />,
  ]

  return (
    <div className="container mx-auto">
      <div className="relative max-w-4xl mx-auto">
        {/* Buttons moved to top right */}
        <div className="absolute top-0 right-0 p-4 flex gap-4 z-20">
          <Link
            href="/projects"
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            View Projects <ArrowRight className="ml-2" size={16} />
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
          >
            Resume
          </Link>
        </div>

        <div className="relative h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] h-[520px]">
              <IconCloud icons={techIcons} />
            </div>
          </div>
          
          <div className="z-1 text-center">
            <Image
              src="/josh.jpeg?height=200&width=200"
              alt="Joshua Ranade"
              width={128}
              height={128}
              className="rounded-full mx-auto mb-4"
            />
            <h1 className="text-3xl font-bold mb-2">Joshua Ranade</h1>
          </div>
        </div>

        <div className="-mt-12">
          <CodeBlock
            language="typescript"
            filename="developer.ts"
            code={developerCode}
            onComplete={() => setCodeComplete(true)}
          />
        </div>
      </div>
    </div>
  )
}