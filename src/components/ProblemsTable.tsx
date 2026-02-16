"use client";
import React, { useState } from "react";
import { allProblems, problemsByTopic } from "@/data/problems";
import Link from "next/link";
import { Problem } from "@/types"; // Make sure this is imported

const ProblemsTable = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Logic to filter problems based on topic and search text
  //   const filteredProblems = (
  //     selectedTopic === "all" ? allProblems : problemsByTopic[selectedTopic]
  //   ).filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()));
  // ... inside the component
  const filteredProblems = (
    selectedTopic === "all" ? allProblems : problemsByTopic[selectedTopic] || []
  ).filter((p: Problem) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const topics = Object.keys(problemsByTopic);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">Practice Problems</h1>

        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setSelectedTopic("all")}
            className={`px-4 py-2 rounded-full border ${selectedTopic === "all" ? "bg-blue-600 text-white" : "bg-gray-800"}`}
          >
            All
          </button>
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => setSelectedTopic(topic)}
              className={`px-4 py-2 rounded-full border capitalize ${selectedTopic === topic ? "bg-blue-600 text-white" : "bg-gray-800"}`}
            >
              {topic.replace(/([A-Z])/g, " $1").trim()}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search problems..."
          className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg outline-none focus:border-blue-500"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-800">
        <table className="w-full text-left bg-gray-900">
          <thead className="bg-gray-800 text-gray-400 uppercase text-sm">
            <tr>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Difficulty</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Solution</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {filteredProblems.map((problem) => (
              <tr
                key={problem.id}
                className="hover:bg-gray-800 transition-colors"
              >
                <td className="px-6 py-4">
                  <span className="text-gray-500">○</span>{" "}
                  {/* Replace with checkmark if completed */}
                </td>
                <td className="px-6 py-4 font-medium text-blue-400 hover:underline">
                  <Link href={`/problems/${problem.id}`}>{problem.title}</Link>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`${
                      problem.difficulty === "Easy"
                        ? "text-green-500"
                        : problem.difficulty === "Medium"
                          ? "text-yellow-500"
                          : "text-red-500"
                    }`}
                  >
                    {problem.difficulty}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-400">{problem.category}</td>
                <td className="px-6 py-4">
                  <Link
                    href={problem.link || "#"}
                    target="_blank"
                    className="text-gray-500 hover:text-white"
                  >
                    Original Link
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProblemsTable;
