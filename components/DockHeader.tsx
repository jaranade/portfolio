"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Sun, Moon, Home, FolderKanban, Code, FileText, Mail, Github, Linkedin } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const DockHeader = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const navigationItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: FolderKanban, label: "Projects", href: "/projects" },
    { icon: Code, label: "Skills", href: "/skills" },
    { icon: FileText, label: "Resume", href: "/resume" },
    { icon: Github, label: "GitHub", href: "https://github.com/jaranade", external: true },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jaranade/", external: true },
    { icon: Mail, label: "Email", href: "mailto:Joshuaranade18@gmail.com" }
  ]

  return (
    <TooltipProvider delayDuration={0}>
      <header className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-auto">
        <nav className="bg-background/80 backdrop-blur-lg border rounded-full p-1.5 sm:p-2 shadow-lg flex items-center justify-center gap-1 sm:gap-2">
          {navigationItems.map(({ icon: Icon, label, href, external }) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <Link 
                  href={href} 
                  className="block"
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-9 h-9 sm:w-12 sm:h-12 rounded-full hover:bg-muted transition-all data-[state=active]:scale-110 hover:scale-110"
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="sr-only">{label}</span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top" className="hidden sm:block">
                {label}
              </TooltipContent>
            </Tooltip>
          ))}

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 sm:w-12 sm:h-12 rounded-full hover:bg-muted transition-all hover:scale-110"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
                ) : (
                  <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top" className="hidden sm:block">
              Toggle theme
            </TooltipContent>
          </Tooltip>
        </nav>
      </header>
    </TooltipProvider>
  )
}

export default DockHeader