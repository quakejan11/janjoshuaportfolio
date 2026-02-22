import React from 'react';
import { TerminalHeader } from './TerminalHeader';
import { TerminalBody } from './TerminalBody';
import { useTerminal } from '../hooks/useTerminal';

const Terminal = ({ initialLines }) => {
  const {
    lines,
    input,
    setInput,
    terminalEndRef,
    handleSubmit
  } = useTerminal(initialLines);

  return (
    <div className="flex-1 flex flex-col bg-black font-mono text-sm m-0 p-0">
      <TerminalHeader />
      <TerminalBody 
        lines={lines}
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        terminalEndRef={terminalEndRef}
      />
    </div>
  );
};

export default Terminal;