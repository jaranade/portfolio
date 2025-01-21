"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Sun, Moon, Home, FolderKanban, Code, FileText, Mail } from "lucide-react"

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
    { icon: Mail, label: "Contact", href: "mailto:Joshuaranade18@gmail.com" }
  ]

  return (
    <TooltipProvider delayDuration={0}>
      <header className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <nav className="bg-background/80 backdrop-blur-lg border rounded-full p-2 shadow-lg flex items-center gap-2">
          {navigationItems.map(({ icon: Icon, label, href }) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <Link href={href} className="block">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-12 h-12 rounded-full hover:bg-muted transition-all data-[state=active]:scale-110 hover:scale-110"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{label}</span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top">{label}</TooltipContent>
            </Tooltip>
          ))}

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 rounded-full hover:bg-muted transition-all hover:scale-110"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">Toggle theme</TooltipContent>
          </Tooltip>
        </nav>
      </header>
    </TooltipProvider>
  )
}

export default DockHeader