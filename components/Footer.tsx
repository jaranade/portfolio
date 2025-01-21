import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2023 Joshua Ranade. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/joshua-ranade-246a2832b" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
          <a href="mailto:Joshuaranade18@gmail.com">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

