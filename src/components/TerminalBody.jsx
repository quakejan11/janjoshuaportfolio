import React from 'react';
import { CommandOutput } from './CommandOutput';
import { CommandInput } from './CommandInput';

export const TerminalBody = ({ lines, input, setInput, handleSubmit, terminalEndRef }) => {
  
  // Helper to render a line with clickable email addresses (opens Gmail compose)
  const renderLineWithEmail = (line, index) => {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    emailRegex.lastIndex = 0;

    while ((match = emailRegex.exec(line)) !== null) {
      const email = match[0];
      const start = match.index;
      const end = emailRegex.lastIndex;

      // Add text before email
      if (start > lastIndex) {
        parts.push(line.substring(lastIndex, start));
      }

      // Add clickable email that opens Gmail compose
      parts.push(
        <a
          key={`${index}-email-${start}`}
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-300 underline"
        >
          {email}
        </a>
      );

      lastIndex = end;
    }

    // Add remaining text
    if (lastIndex < line.length) {
      parts.push(line.substring(lastIndex));
    }

    // If no emails found, return original line as plain text
    if (parts.length === 0) {
      return <div key={index}>{line}</div>;
    }

    return <div key={index}>{parts}</div>;
  };

  // Function to render lines with clickable project numbers and emails
  const renderLine = (line, index) => {
    // First, check for project number in format [1], [2], etc.
    const projectMatch = line.match(/\[(\d+)\]/);
    
    if (projectMatch) {
      const projectId = projectMatch[1];
      const parts = line.split(/\[\d+\]/);
      
      return (
        <div key={index}>
          {parts[0]}
          <button
            onClick={() => {
              window.open(`/project/${projectId}`, '_blank');
            }}
            className="text-green-400 hover:text-green-300 underline inline"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'inherit', fontSize: 'inherit' }}
          >
            [{projectId}]
          </button>
          {parts[1]}
        </div>
      );
    }
    
    // No project number, check for emails
    return renderLineWithEmail(line, index);
  };

  return (
    <div className="flex-1 p-4 text-green-400 overflow-y-auto space-y-1 min-h-0">
      {lines.map((line, index) => renderLine(line, index))}
      <CommandInput 
        input={input} 
        setInput={setInput} 
        handleSubmit={handleSubmit} 
      />
      <div ref={terminalEndRef} />
    </div>
  );
};