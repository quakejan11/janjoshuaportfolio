import { useState, useRef, useEffect } from "react";
import { commands } from "../utils/commands";

export const useTerminal = (initialLines) => {
  const [lines, setLines] = useState(initialLines);
  const [input, setInput] = useState("");
  const terminalEndRef = useRef(null);

  const runCommand = (cmd) => {
    if (cmd === "clear") {
      setLines([]);
      return;
    }

    // Handle project commands
    if (cmd.startsWith('project ')) {
      const projectId = cmd.split(' ')[1];
      if (['1', '2', '3', '4', '5'].includes(projectId)) {
        window.open(`/project/${projectId}`, '_blank');
        setLines((prev) => [...prev, `📂 Opening project ${projectId} in new tab...`]);
        return;
      } else {
        setLines((prev) => [...prev, `❌ Project not found. Available: 1-5`]);
        return;
      }
    }

    // Handle CV download
    if (cmd === "cv") {
      // Trigger download
      const link = document.createElement('a');
      link.href = '/Jan_Joshua_Bongo_CV.pdf'; // make sure this file exists in public folder
      link.download = 'Jan_Joshua_Bongo_CV.pdf'; // suggested filename for download
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

    // General command lookup
    if (commands[cmd]) {
      setLines((prev) => [...prev, ...commands[cmd]]);
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