import { useState, useRef, useEffect } from "react";
import { commands } from "../utils/commands";

export const useTerminal = (initialLines) => {
  const [lines, setLines] = useState(initialLines);
  const [input, setInput] = useState("");
  const terminalEndRef = useRef(null);

  const runCommand = (cmd) => {
    // Convert command to lowercase for case-insensitive comparison
    const lowerCmd = cmd.toLowerCase();
    
    if (lowerCmd === "clear") {
      setLines([]);
      return;
    }

    // Handle project commands (case-insensitive)
    if (lowerCmd.startsWith('project ')) {
      const projectId = cmd.split(' ')[1]; // Keep original for display
      if (['1', '2', '3', '4', '5'].includes(projectId)) {
        window.open(`/project/${projectId}`, '_blank');
        setLines((prev) => [...prev, `📂 Opening project ${projectId} in new tab...`]);
        return;
      } else {
        setLines((prev) => [...prev, `❌ Project not found. Available: 1-5`]);
        return;
      }
    }

    // Handle CV download (case-insensitive)
    if (lowerCmd === "cv") {
      // Trigger download
      const link = document.createElement('a');
      link.href = '/Jan_Joshua_Bongo_CV.pdf';
      link.download = 'Jan_Joshua_Bongo_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show the cv message from commands (if defined)
      if (commands.cv) {
        setLines((prev) => [...prev, ...commands.cv]);
      } else {
        setLines((prev) => [...prev, "📄 Downloading CV...", "/Jan_Joshua_Bongo_CV.pdf"]);
      }
      return;
    }

    // General command lookup - check against lowercase version
    // Find the original command key that matches (case-insensitive)
    const matchedCommandKey = Object.keys(commands).find(
      key => key.toLowerCase() === lowerCmd
    );
    
    if (matchedCommandKey) {
      setLines((prev) => [...prev, ...commands[matchedCommandKey]]);
    } else {
      setLines((prev) => [...prev, "command not found"]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLines((prev) => [...prev, `jan@portfolio:~$ ${input}`]);
    runCommand(input.trim());
    setInput("");
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  return {
    lines,
    input,
    setInput,
    terminalEndRef,
    handleSubmit
  };
};
