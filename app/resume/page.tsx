import { Download } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function Resume() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Resume</h1>
          <a
            href="https://drive.google.com/file/d/1DJkhZ0kBCREaIsMNauiSRNJ60619rTOG/view?usp=sharing" // Replace with your actual file path or URL
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 flex items-center px-4 py-2 rounded-lg text-black"
          >
            <Download className="mr-2 h-4 w-4 text-black" />
            Download
          </a>
        </div>

        <div className="space-y-8">
          <Card className="p-8 bg-secondary/50 backdrop-blur-sm border-0">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Joshua Ranade</h2>
              <div className="text-muted-foreground">
                <p>Email: Joshuaranade18@gmail.com</p>
                <p>LinkedIn: /in/jaranade</p>
                <p>GitHub: /jaranade</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div>
                <h4 className="font-semibold">GITAM University</h4>
                <p className="text-muted-foreground">B. Tech in Computer Science and Engineering</p>
                <p className="text-sm text-muted-foreground">Jun 2019 - Jun 2023</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Work Experience</h3>

              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold">Software Development Engineer in Test</h4>
                    <p className="text-muted-foreground">Parnasoft Technologies Pvt. Ltd.</p>
                  </div>
                  <span className="text-sm text-muted-foreground">Jul 2023 - Present</span>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Developed and executed automated test scripts for API testing</li>
                  <li>Integrated API automation tests into CI/CD pipelines</li>
                  <li>Upgraded the .NET framework across the testing repository</li>
                  <li>Automated backend testing for RESTful APIs and WCF services</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold">Intern & Part-time Software Engineer</h4>
                    <p className="text-muted-foreground">Parnasoft Technologies Pvt. Ltd.</p>
                  </div>
                  <span className="text-sm text-muted-foreground">May 2022 - Jul 2023</span>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Conducted comprehensive testing for IoT view aspects</li>
                  <li>Led automation testing for AVEVA EDGE-HMI software</li>
                  <li>Authored 300+ automation test scripts</li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Languages</h4>
                  <p className="text-muted-foreground">
                    English (Proficient), Telugu (Proficient), Hindi (Proficient), Sanskrit (Intermediate)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technical</h4>
                  <p className="text-muted-foreground">
                    C#, Python, .NET, C++, SQL, Java, JavaScript, React, Next.js, IoT
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Python Data Structures (University of Michigan)</li>
                <li>Introduction to Web Development (University of California, Davis)</li>
                <li>Introduction to Artificial Intelligence (IBM)</li>
                <li>Mathematical Thinking in Computer Science (UCSD)</li>
                <li>TensorFlow for CNNs (Coursera)</li>
                <li>Operating System and You (Google)</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
