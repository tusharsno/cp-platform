import { Problem } from "@/types";

export const dpProblems: Problem[] = [
  {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming",
    order: 1,
    link: "https://leetcode.com/problems/climbing-stairs/",
    problemStatement:
      "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    constraints: "1 <= n <= 45",
    starterCode: "function climbStairs(n) {\n  // Write your code here\n};",
    handlerFunction: "climbStairs",
    starterFunctionName: "climbStairs",
  },
  {
    id: "min-cost-climbing-stairs",
    title: "Min Cost Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming",
    order: 2,
    link: "https://leetcode.com/problems/min-cost-climbing-stairs/",
    problemStatement:
      "Find the minimum cost to reach the top of the floor by either climbing one or two steps, starting from index 0 or index 1.",
    constraints: "2 <= cost.length <= 1000",
    starterCode:
      "function minCostClimbingStairs(cost) {\n  // Write your code here\n};",
    handlerFunction: "minCostClimbingStairs",
    starterFunctionName: "minCostClimbingStairs",
  },
  {
    id: "house-robber",
    title: "House Robber",
    difficulty: "Medium",
    category: "Dynamic Programming",
    order: 3,
    link: "https://leetcode.com/problems/house-robber/",
    problemStatement:
      "You are a professional robber. Each house has a certain amount of money stashed. Return the maximum amount of money you can rob tonight without alerting the police (cannot rob adjacent houses).",
    constraints: "1 <= nums.length <= 100",
    starterCode: "function rob(nums) {\n  // Write your code here\n};",
    handlerFunction: "rob",
    starterFunctionName: "rob",
  },
  {
    id: "coin-change",
    title: "Coin Change",
    difficulty: "Medium",
    category: "Dynamic Programming",
    order: 4,
    link: "https://leetcode.com/problems/coin-change/",
    problemStatement:
      "Return the fewest number of coins that you need to make up a certain amount. If that amount of money cannot be made up by any combination of the coins, return -1.",
    constraints: "1 <= coins.length <= 12, 0 <= amount <= 10^4",
    starterCode:
      "function coinChange(coins, amount) {\n  // Write your code here\n};",
    handlerFunction: "coinChange",
    starterFunctionName: "coinChange",
  },
  {
    id: "longest-increasing-subsequence",
    title: "Longest Increasing Subsequence",
    difficulty: "Medium",
    category: "Dynamic Programming",
    order: 5,
    link: "https://leetcode.com/problems/longest-increasing-subsequence/",
    problemStatement:
      "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
    constraints: "1 <= nums.length <= 2500",
    starterCode: "function lengthOfLIS(nums) {\n  // Write your code here\n};",
    handlerFunction: "lengthOfLIS",
    starterFunctionName: "lengthOfLIS",
  },
  {
    id: "longest-common-subsequence",
    title: "Longest Common Subsequence",
    difficulty: "Medium",
    category: "Dynamic Programming",
    order: 6,
    link: "https://leetcode.com/problems/longest-common-subsequence/",
    problemStatement:
      "Given two strings text1 and text2, return the length of their longest common subsequence.",
    constraints: "1 <= text1.length, text2.length <= 1000",
    starterCode:
      "function longestCommonSubsequence(text1, text2) {\n  // Write your code here\n};",
    handlerFunction: "longestCommonSubsequence",
    starterFunctionName: "longestCommonSubsequence",
  },
  {
    id: "word-break",
    title: "Word Break",
    difficulty: "Medium",
    category: "Dynamic Programming",
    order: 7,
    link: "https://leetcode.com/problems/word-break/",
    problemStatement:
      "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
    constraints: "1 <= s.length <= 300, 1 <= wordDict.length <= 1000",
    starterCode:
      "function wordBreak(s, wordDict) {\n  // Write your code here\n};",
    handlerFunction: "wordBreak",
    starterFunctionName: "wordBreak",
  },
  {
    id: "unique-paths",
    title: "Unique Paths",
    difficulty: "Medium",
    category: "Dynamic Programming",
    order: 8,
    link: "https://leetcode.com/problems/unique-paths/",
    problemStatement:
      "A robot is located at the top-left corner of a m x n grid. The robot can only move either down or right at any point in time. How many possible unique paths are there to the bottom-right corner?",
    constraints: "1 <= m, n <= 100",
    starterCode: "function uniquePaths(m, n) {\n  // Write your code here\n};",
    handlerFunction: "uniquePaths",
    starterFunctionName: "uniquePaths",
  },
  {
    id: "edit-distance",
    title: "Edit Distance",
    difficulty: "Hard",
    category: "Dynamic Programming",
    order: 9,
    link: "https://leetcode.com/problems/edit-distance/",
    problemStatement:
      "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2 (insert, delete, or replace a character).",
    constraints: "0 <= word1.length, word2.length <= 500",
    starterCode:
      "function minDistance(word1, word2) {\n  // Write your code here\n};",
    handlerFunction: "minDistance",
    starterFunctionName: "minDistance",
  },
  {
    id: "burst-balloons",
    title: "Burst Balloons",
    difficulty: "Hard",
    category: "Dynamic Programming",
    order: 10,
    link: "https://leetcode.com/problems/burst-balloons/",
    problemStatement:
      "You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it. Burst them wisely to maximize the coins you collect.",
    constraints: "n == nums.length, 1 <= n <= 300, 0 <= nums[i] <= 100",
    starterCode: "function maxCoins(nums) {\n  // Write your code here\n};",
    handlerFunction: "maxCoins",
    starterFunctionName: "maxCoins",
  },
];
