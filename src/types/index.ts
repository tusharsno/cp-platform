export type Difficulty = "Easy" | "Medium" | "Hard";

export type Example = {
  id: number;
  inputText: string;
  outputText: string;
  explanation?: string;
};

export interface Problem {
  id: string;
  title: string;
  difficulty: Difficulty;
  category: string; // e.g., "Array", "String", "DP"
  order: number; // To keep them sorted (1, 2, 3...)
  videoUrl?: string;
  link?: string; // Original LeetCode/HackerRank link
  problemStatement: string;
  constraints: string;
  starterCode: string;
  handlerFunction: string; // The name of the main function to test
  starterFunctionName: string;
  examples: Example[];
}
