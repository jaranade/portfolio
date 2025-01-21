import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Health Care Chatbot",
    description: "An interactive chatbot using Python's Tkinter for symptom analysis and disease prediction.",
    tags: ["Python", "Machine Learning", "NLP", "Tkinter"],
    github: "https://github.com/yourusername/health-care-chatbot",
  },
  {
    title: "Pothole Detection Using YOLO",
    description: "Real-time computer vision system to detect and localize potholes using YOLOv4.",
    tags: ["Computer Vision", "YOLO", "Python", "TensorFlow"],
    github: "https://github.com/yourusername/pothole-detection",
  },
  {
    title: "Deep Fake Detection System",
    description: "Deep learning model with CNNs and GANs for detecting deepfake images and videos.",
    tags: ["Deep Learning", "GANs", "CNNs", "Image Processing"],
    github: "https://github.com/yourusername/deepfake-detection",
  },
  {
    title: "ARUco Marker Detection",
    description: "Real-time ARUco marker detection and tracking system using OpenCV.",
    tags: ["OpenCV", "YOLO", "RCNN", "Computer Vision"],
    github: "https://github.com/yourusername/aruco-detection",
  },
  {
    title: "Portfolio Website",
    description: "A portfolio website using Next.js, Tailwind CSS, and JavaScript.",
    tags: ["Next.js", "Tailwind CSS", "JavaScript", "Figma"],
    github: "https://github.com/yourusername/portfolio-website",
  },
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Featured Projects</h1>
        <p className="text-muted-foreground">
          A collection of my work in software development, machine learning, and computer vision
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="group overflow-hidden bg-secondary/50 backdrop-blur-sm border-0">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="bg-primary/10 text-primary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View on GitHub
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

