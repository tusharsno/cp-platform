import { Problem } from "@/types";

export const stackQueueProblems: Problem[] = [
  {
    id: "valid-parentheses-stack",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack",
    order: 1,
    link: "https://leetcode.com/problems/valid-parentheses/",
    problemStatement:
      "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    constraints: "1 <= s.length <= 10^4",
    starterCode: "function isValid(s) {\n  // Write your code here\n};",
    handlerFunction: "isValid",
    starterFunctionName: "isValid",
  },
  {
    id: "implement-queue-using-stacks",
    title: "Implement Queue using Stacks",
    difficulty: "Easy",
    category: "Queue",
    order: 2,
    link: "https://leetcode.com/problems/implement-queue-using-stacks/",
    problemStatement:
      "Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).",
    constraints:
      "1 <= x <= 9, At most 100 calls will be made to push, pop, peek, and empty.",
    starterCode:
      "var MyQueue = function() {\n    \n};\n\nMyQueue.prototype.push = function(x) {\n    \n};\n\nMyQueue.prototype.pop = function() {\n    \n};\n\nMyQueue.prototype.peek = function() {\n    \n};\n\nMyQueue.prototype.empty = function() {\n    \n};",
    handlerFunction: "MyQueue",
    starterFunctionName: "MyQueue",
  },
  {
    id: "min-stack",
    title: "Min Stack",
    difficulty: "Medium",
    category: "Stack",
    order: 3,
    link: "https://leetcode.com/problems/min-stack/",
    problemStatement:
      "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
    constraints: "-2^31 <= val <= 2^31 - 1",
    starterCode:
      "var MinStack = function() {\n    \n};\n\nMinStack.prototype.push = function(val) {\n    \n};\n\nMinStack.prototype.pop = function() {\n    \n};\n\nMinStack.prototype.top = function() {\n    \n};\n\nMinStack.prototype.getMin = function() {\n    \n};",
    handlerFunction: "MinStack",
    starterFunctionName: "MinStack",
  },
  {
    id: "evaluate-reverse-polish-notation",
    title: "Evaluate Reverse Polish Notation",
    difficulty: "Medium",
    category: "Stack",
    order: 4,
    link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
    problemStatement:
      "Evaluate the value of an arithmetic expression in Reverse Polish Notation. Valid operators are +, -, *, and /.",
    constraints: "1 <= tokens.length <= 10^4",
    starterCode: "function evalRPN(tokens) {\n  // Write your code here\n};",
    handlerFunction: "evalRPN",
    starterFunctionName: "evalRPN",
  },
  {
    id: "daily-temperatures",
    title: "Daily Temperatures",
    difficulty: "Medium",
    category: "Stack",
    order: 5,
    link: "https://leetcode.com/problems/daily-temperatures/",
    problemStatement:
      "Given an array of integers temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.",
    constraints: "1 <= temperatures.length <= 10^5",
    starterCode:
      "function dailyTemperatures(temperatures) {\n  // Write your code here\n};",
    handlerFunction: "dailyTemperatures",
    starterFunctionName: "dailyTemperatures",
  },
  {
    id: "generate-parentheses-stack",
    title: "Generate Parentheses",
    difficulty: "Medium",
    category: "Stack",
    order: 6,
    link: "https://leetcode.com/problems/generate-parentheses/",
    problemStatement:
      "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    constraints: "1 <= n <= 8",
    starterCode:
      "function generateParenthesis(n) {\n  // Write your code here\n};",
    handlerFunction: "generateParenthesis",
    starterFunctionName: "generateParenthesis",
  },
  {
    id: "simplify-path",
    title: "Simplify Path",
    difficulty: "Medium",
    category: "Stack",
    order: 7,
    link: "https://leetcode.com/problems/simplify-path/",
    problemStatement:
      "Given a string path, which is an absolute path to a file or directory in a Unix-style file system, convert it to the simplified canonical path.",
    constraints: "1 <= path.length <= 3000",
    starterCode: "function simplifyPath(path) {\n  // Write your code here\n};",
    handlerFunction: "simplifyPath",
    starterFunctionName: "simplifyPath",
  },
  {
    id: "task-scheduler",
    title: "Task Scheduler",
    difficulty: "Medium",
    category: "Queue",
    order: 8,
    link: "https://leetcode.com/problems/task-scheduler/",
    problemStatement:
      "Given a characters array tasks, representing the tasks a CPU needs to do, and a cooling time n, return the least number of units of time that the CPU will take to finish all the given tasks.",
    constraints: "1 <= tasks.length <= 10^4, 0 <= n <= 100",
    starterCode:
      "function leastInterval(tasks, n) {\n  // Write your code here\n};",
    handlerFunction: "leastInterval",
    starterFunctionName: "leastInterval",
  },
  {
    id: "largest-rectangle-in-histogram",
    title: "Largest Rectangle in Histogram",
    difficulty: "Hard",
    category: "Stack",
    order: 9,
    link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    problemStatement:
      "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
    constraints: "1 <= heights.length <= 10^5",
    starterCode:
      "function largestRectangleArea(heights) {\n  // Write your code here\n};",
    handlerFunction: "largestRectangleArea",
    starterFunctionName: "largestRectangleArea",
  },
  {
    id: "sliding-window-maximum-queue",
    title: "Sliding Window Maximum",
    difficulty: "Hard",
    category: "Queue",
    order: 10,
    link: "https://leetcode.com/problems/sliding-window-maximum/",
    problemStatement:
      "You are given an array of integers nums, there is a sliding window of size k moving from left to right. Return the max sliding window using a monotonic queue approach.",
    constraints: "1 <= nums.length <= 10^5, 1 <= k <= nums.length",
    starterCode:
      "function maxSlidingWindow(nums, k) {\n  // Write your code here\n};",
    handlerFunction: "maxSlidingWindow",
    starterFunctionName: "maxSlidingWindow",
  },
];
