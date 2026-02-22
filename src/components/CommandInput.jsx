import React from 'react';

export const CommandInput = ({ input, setInput, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="flex">
      <span className="mr-2 text-green-400">jan@portfolio:~$</span>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-transparent outline-none flex-1 text-green-400"
        autoFocus
      />
    </form>
  );
};