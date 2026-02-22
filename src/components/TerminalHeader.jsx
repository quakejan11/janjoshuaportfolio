import React from 'react';

export const TerminalHeader = () => {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-zinc-800 rounded-none">
      <span className="w-3 h-3 bg-red-500 rounded-full" />
      <span className="w-3 h-3 bg-yellow-400 rounded-full" />
      <span className="w-3 h-3 bg-green-500 rounded-full" />
      <span className="ml-2 text-zinc-400 text-xs">jan@portfolio</span>
    </div>
  );
};