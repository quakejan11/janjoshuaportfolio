import React from 'react';

export const CommandOutput = ({ lines }) => {
  return (
    <>
      {lines.map((line, index) => {
        const isPrompt = line.startsWith('jan@portfolio:~$');
        return (
          <div 
            key={index} 
            className={!isPrompt ? "pl-4" : ""}
          >
            {line}
          </div>
        );
      })}
    </>
  );
};