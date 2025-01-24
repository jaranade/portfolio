"use client"

/* eslint-disable react-hooks/exhaustive-deps */

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism"
import { IconCheck, IconCopy } from "@tabler/icons-react"

interface CodeBlockProps {
  language: string
  code: string
  filename?: string
  highlightLines?: number[]
  onComplete?: () => void
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code, filename, highlightLines = [], onComplete }) => {
  const [copied, setCopied] = useState(false)
  const [displayedCode, setDisplayedCode] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const typewriterRef = useRef<NodeJS.Timeout | null>(null)
  const hasCompletedTyping = useRef(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    if (hasCompletedTyping.current) {
      return
    }

    let currentIndex = 0

    const typeNextCharacter = () => {
      if (currentIndex < code.length) {
        setDisplayedCode(code.slice(0, currentIndex + 1))
        currentIndex++
        typewriterRef.current = setTimeout(typeNextCharacter, 10)
      } else {
        setIsTyping(false)
        hasCompletedTyping.current = true
        onComplete?.()
      }
    }

    typeNextCharacter()

    return () => {
      if (typewriterRef.current) {
        clearTimeout(typewriterRef.current)
      }
    }
  }, []) // Empty dependency array

  return (
    <div className="w-full rounded-lg bg-[#1a1b26] overflow-hidden">
      {filename && (
        <div className="flex justify-between items-center px-4 py-2 border-b border-[#2e2f3e]">
          <div className="text-sm text-zinc-400">{filename}</div>
          <button onClick={copyToClipboard} className="text-sm text-zinc-400 hover:text-zinc-200">
            {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
          </button>
        </div>
      )}
      <div className="p-4 relative font-mono">
        <SyntaxHighlighter
          language={language}
          style={atomDark}
          customStyle={{ margin: 0, padding: 0, background: "transparent" }}
          showLineNumbers
          wrapLines={true}
          wrapLongLines={true}
        >
          {displayedCode + (isTyping ? "▋" : "")}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default CodeBlock

