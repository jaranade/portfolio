"use client";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { IconCheck, IconCopy } from "@tabler/icons-react";

interface CodeBlockProps {
  language: string;
  code: string;
  filename?: string;
  highlightLines?: number[];
  onComplete?: () => void;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  language,
  code,
  filename,
  highlightLines = [],
  onComplete,
}) => {
  const [copied, setCopied] = React.useState(false);
  const [displayedCode, setDisplayedCode] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(true);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  React.useEffect(() => {
    let isMounted = true;
    let currentIndex = 0;

    const typeNextCharacter = () => {
      if (!isMounted) return;
      
      if (currentIndex < code.length) {
        setDisplayedCode(prev => prev + code[currentIndex]);
        currentIndex++;
        setTimeout(typeNextCharacter, 10);
      } else {
        setIsTyping(false);
        onComplete?.();
      }
    };

    // Reset state when code changes
    setDisplayedCode("");
    setIsTyping(true);

    typeNextCharacter();

    return () => {
      isMounted = false;
    };
  }, [code, onComplete]);

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
        >
          {isTyping 
            ? displayedCode + "▋" 
            : `${displayedCode} // Code complete ✨`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;