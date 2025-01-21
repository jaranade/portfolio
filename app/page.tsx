import Image from "next/image"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <Image
              src="/josh.jpeg?height=200&width=200"
              alt="Joshua Ranade"
              width={128}
              height={128}
              className="rounded-full"
            />
           
          </div>
          <h1 className="text-4xl font-bold mb-4">Joshua Ranade</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Software Development Engineer specializing in test automation and full-stack development.
            Creating robust, efficient solutions and exploring cutting-edge technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View Projects <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              Resume
            </Link>
          </div>
        </div>

        <Card className="p-6 bg-secondary/50 backdrop-blur-sm border-0">
          <h2 className="text-2xl font-semibold mb-4">What Makes Me, Well… Me</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              Hello! I'm Joshua Ranade, I build things that work and break things that don’t—whether it’s writing clean code, automating workflows, or experimenting with AI projects. Efficiency and simplicity are my end goals, always.
            </p>
            <br />
            <p>
            When I’m not coding, you’ll catch me on the basketball court chasing fast breaks or online, sharpening my aim in FPS games. Both keep me competitive and quick on my feet, whether it’s in a match or debugging under pressure.
            </p>
            <br />
            <p>
              Outside of work, I enjoy volunteering for community projects, participating in game development
              competitions, and staying active through basketball and chess. I'm always eager to take on new challenges
              and contribute to innovative solutions in the field of software development.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}

