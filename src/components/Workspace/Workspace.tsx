"use client";

import React, { useState } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import Editor from "@monaco-editor/react";
import { useTheme } from "next-themes";
import {
  Send,
  CheckCircle2,
  ChevronLeft,
  Play,
  Terminal,
  History,
  Settings2,
} from "lucide-react";
import Link from "next/link";
import { problemJudges } from "@/lib/judge";

// Problem Type-e Examples add kora hoyeche
interface Example {
  id: number;
  inputText: string;
  outputText: string;
  explanation?: string;
}

interface Problem {
  id: string;
  title: string;
  problemStatement: string;
  constraints: string;
  difficulty: string;
  starterCode: string;
  examples: Example[];
}

export default function Workspace({ problem }: { problem: Problem }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [userCode, setUserCode] = useState(problem.starterCode);
  const [consoleOutput, setConsoleOutput] = useState<string>(
    "Run your code to see results...",
  );
  const [customInput, setCustomInput] = useState<string>(""); // Custom input field

  const { theme } = useTheme();
  const { width, height } = useWindowSize();

  // --- Run Logic with Custom Input ---
  const handleRun = () => {
    try {
      // Semicolon crash fix
      const cleanedCode = userCode.trim().endsWith(";")
        ? userCode.trim().slice(0, -1)
        : userCode;
      const userFunction = new Function(`return (${cleanedCode})`)();

      let result;
      if (customInput.trim()) {
        // User jodi custom input dey, seta parse kore pass kora
        const parsedInput = JSON.parse(customInput);
        result = Array.isArray(parsedInput)
          ? userFunction(...parsedInput)
          : userFunction(parsedInput);
        setConsoleOutput(`Custom Run Output: ${JSON.stringify(result)}`);
      } else {
        // Default judge test case
        const judge = problemJudges[problem.id];
        if (!judge) return setConsoleOutput("Error: Judge logic not found.");
        const judgeRes = judge(userFunction);
        setConsoleOutput(
          judgeRes.passed
            ? `Test Passed! \nOutput: ${JSON.stringify(judgeRes.actual)}`
            : `Wrong Answer! \nExpected: ${JSON.stringify(judgeRes.expected)} \nGot: ${JSON.stringify(judgeRes.actual)}`,
        );
      }
    } catch (error: any) {
      setConsoleOutput(`Error: ${error.message}`);
    }
  };

  const handleSubmit = async () => {
    if (!userCode || userCode.trim() === problem.starterCode.trim()) {
      alert("Please write your solution before submitting!");
      return;
    }
    setIsSubmitting(true);
    try {
      const cleanedCode = userCode.trim().endsWith(";")
        ? userCode.trim().slice(0, -1)
        : userCode;
      const userFunction = new Function(`return (${cleanedCode})`)();
      const judge = problemJudges[problem.id];
      if (!judge) throw new Error("Judge logic not found.");

      const result = judge(userFunction);
      if (result.passed) {
        setTimeout(() => {
          setIsSubmitting(false);
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 5000);
        }, 1000);
      } else {
        setIsSubmitting(false);
        alert(
          `Wrong Answer!\n\nExpected: ${JSON.stringify(result.expected)}\nGot: ${JSON.stringify(result.actual)}`,
        );
      }
    } catch (error: any) {
      setIsSubmitting(false);
      alert("Judging Error: " + error.message);
    }
  };

  return (
    <div className="relative flex flex-col h-screen bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-gray-100 transition-colors duration-200">
      {showSuccess && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={300}
          recycle={false}
          gravity={0.2}
        />
      )}

      <header className="h-12 border-b border-slate-200 dark:border-white/10 flex items-center justify-between px-4 bg-slate-50 dark:bg-[#1a1a1a]">
        <div className="flex items-center gap-4">
          <Link
            href="/problems"
            className="p-1.5 hover:bg-slate-200 dark:hover:bg-white/5 rounded-lg transition-colors"
          >
            <ChevronLeft size={18} />
          </Link>
          <h2 className="text-sm font-semibold">{problem.title}</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleRun}
            className="flex items-center gap-2 px-3 py-1 text-xs font-medium bg-slate-200 dark:bg-white/10 rounded hover:opacity-80"
          >
            <Play size={14} /> Run
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6 py-1 text-xs font-bold bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-slate-400"
          >
            {isSubmitting ? (
              "Judging..."
            ) : (
              <>
                <Send size={14} /> Submit
              </>
            )}
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel: Problem & Examples */}
        <div className="w-1/2 overflow-y-auto border-r border-slate-200 dark:border-white/10 p-6 bg-white dark:bg-[#0f0f0f]">
          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-green-500/10 text-green-600 border border-green-500/20 mb-4 inline-block">
            {problem.difficulty}
          </span>
          <h1 className="text-2xl font-bold mb-4">{problem.title}</h1>
          <div className="text-sm space-y-4 text-slate-700 dark:text-gray-300">
            <p>{problem.problemStatement}</p>

            {/* Examples Render logic */}
            {problem.examples?.map((ex) => (
              <div key={ex.id} className="space-y-2">
                <p className="font-bold text-slate-900 dark:text-white">
                  Example {ex.id}:
                </p>
                <div className="bg-slate-100 dark:bg-white/5 p-3 rounded-lg border border-slate-200 dark:border-white/10 font-mono text-xs">
                  <p>
                    <span className="text-blue-500">Input:</span> {ex.inputText}
                  </p>
                  <p>
                    <span className="text-green-500">Output:</span>{" "}
                    {ex.outputText}
                  </p>
                  {ex.explanation && (
                    <p>
                      <span className="text-yellow-500">Explanation:</span>{" "}
                      {ex.explanation}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div className="bg-slate-100 dark:bg-white/5 p-4 rounded-lg border border-slate-200 dark:border-white/10 mt-6">
              <p className="text-[10px] font-bold uppercase text-slate-500 flex items-center gap-2 mb-2">
                <Terminal size={12} /> Constraints
              </p>
              <p className="font-mono text-xs text-slate-600 dark:text-gray-400">
                {problem.constraints}
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel: Editor & Custom Input */}
        <div className="w-1/2 flex flex-col bg-slate-50 dark:bg-[#161616]">
          <div className="flex-1 overflow-hidden">
            <Editor
              height="100%"
              defaultLanguage="javascript"
              value={userCode}
              theme={theme === "dark" ? "vs-dark" : "light"}
              options={{ minimap: { enabled: false }, fontSize: 14 }}
              onChange={(value) => setUserCode(value || "")}
            />
          </div>

          {/* Custom Input & Console */}
          <div className="h-64 border-t border-slate-300 dark:border-white/10 flex flex-col bg-white dark:bg-[#0a0a0a]">
            <div className="flex border-b border-slate-200 dark:border-white/10">
              <button className="px-4 py-2 text-[10px] font-bold border-b-2 border-blue-500 text-blue-500">
                Testcase
              </button>
              <button className="px-4 py-2 text-[10px] font-bold text-slate-500 hover:text-slate-700 dark:hover:text-white">
                Result
              </button>
            </div>

            <div className="flex-1 p-3 flex gap-4 overflow-hidden">
              <div className="flex-1 flex flex-col">
                <p className="text-[10px] font-bold text-slate-400 mb-1 flex items-center gap-1">
                  <Settings2 size={10} /> Custom Input (JSON)
                </p>
                <textarea
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="e.g. [7, 1, 5, 3, 6, 4]"
                  className="flex-1 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded p-2 font-mono text-xs resize-none outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex-1 flex flex-col">
                <p className="text-[10px] font-bold text-slate-400 mb-1 flex items-center gap-1">
                  <History size={10} /> Console Output
                </p>
                <div
                  className={`flex-1 p-2 font-mono text-xs rounded border border-slate-200 dark:border-white/10 overflow-y-auto ${
                    consoleOutput.includes("Passed")
                      ? "text-green-500"
                      : "text-slate-400"
                  }`}
                >
                  {consoleOutput}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="bg-white dark:bg-[#111111] p-8 rounded-2xl text-center shadow-2xl border border-blue-500/20 max-w-sm w-full animate-in zoom-in">
            <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Accepted!</h2>
            <p className="text-slate-500 text-sm mb-6">
              Your code solved the problem correctly.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-transform active:scale-95"
            >
              Next Problem
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
