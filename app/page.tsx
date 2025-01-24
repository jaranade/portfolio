"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import CodeBlock from "@/components/ui/code-block"
import { useState, useEffect } from "react"

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

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Image
            src="/josh.jpeg?height=200&width=200"
            alt="Joshua Ranade"
            width={128}
            height={128}
            className="rounded-full mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">Joshua Ranade</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
            Software Development Engineer specializing in full-stack development, web design, and API integrations.
            Creating efficient, user-centric solutions with modern technologies.
          </p>
          <div className="flex justify-center gap-4 mb-8">
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
        </div>
        <CodeBlock
          language="typescript"
          filename="developer.ts"
          code={developerCode}
          onComplete={() => setCodeComplete(true)}
        />
      </div>
    </div>
  )
}

