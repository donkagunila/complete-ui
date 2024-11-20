import React from "react";
import { twMerge } from "tailwind-merge";
import { CodeBlock } from "react-code-block";

import { useCopyToClipboard } from "react-use";

interface ICodeCardProps {
  language: string,
  code: string,
  className?: string
}

const CodeCard = ({ language, code, className }: ICodeCardProps) => {

  const [state, copyToClipboard] = useCopyToClipboard();
  const copyCode = () => {
    copyToClipboard(code);
  };


  return (
    <div className="my-4 relative">
      <CodeBlock code={code} language={language}>
        <CodeBlock.Code className={twMerge(["bg-gray-900 p-6 rounded-xl shadow-lg", className ?? ""])}>
          <CodeBlock.LineContent>
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </CodeBlock.Code>


        <button onClick={copyCode}>
          {state.value && (
            <div
              className="absolute right-4 top-3 bg-white [&>svg]:h-3.5 [&>svg]:w-3.5 opacity-1 transition-opacity p-1 rounded-md group-hover:opacity-100 &{} duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   className="lucide lucide-check">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
          )}
          {!state.value && (
            <div
              className="absolute right-4 top-3 bg-white [&>svg]:h-3.5 [&>svg]:w-3.5 opacity-1 transition-opacity p-1 rounded-md group-hover:opacity-100 &{} duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                   viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   className="lucide lucide-clipboard group-hover:opacity-100">
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                <path
                  d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
              </svg>
            </div>
          )}
        </button>
      </CodeBlock>
    </div>
  );
};

export default CodeCard;