import { Problem } from "@/types";

export const greedyProblems: Problem[] = [
  {
    id: "assign-cookies",
    title: "Assign Cookies",
    difficulty: "Easy",
    category: "Greedy",
    order: 1,
    link: "https://leetcode.com/problems/assign-cookies/",
    problemStatement:
      "Assign cookies to children such that the number of content children is maximized. Each child has a greed factor, and each cookie has a size.",
    constraints: "1 <= g.length <= 3 * 10^4, 0 <= s.length <= 3 * 10^4",
    starterCode:
      "function findContentChildren(g, s) {\n  // Write your code here\n};",
    handlerFunction: "findContentChildren",
    starterFunctionName: "findContentChildren",
  },
  {
    id: "maximum-subarray-greedy",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Greedy",
    order: 2,
    link: "https://leetcode.com/problems/maximum-subarray/",
    problemStatement:
      "Given an integer array nums, find the contiguous subarray which has the largest sum and return its sum (Kadane's Algorithm).",
    constraints: "1 <= nums.length <= 10^5",
    starterCode: "function maxSubArray(nums) {\n  // Write your code here\n};",
    handlerFunction: "maxSubArray",
    starterFunctionName: "maxSubArray",
  },
  {
    id: "jump-game",
    title: "Jump Game",
    difficulty: "Medium",
    category: "Greedy",
    order: 3,
    link: "https://leetcode.com/problems/jump-game/",
    problemStatement:
      "You are given an integer array nums. You are initially positioned at the first index, and each element represents your maximum jump length. Determine if you can reach the last index.",
    constraints: "1 <= nums.length <= 10^4",
    starterCode: "function canJump(nums) {\n  // Write your code here\n};",
    handlerFunction: "canJump",
    starterFunctionName: "canJump",
  },
  {
    id: "jump-game-ii",
    title: "Jump Game II",
    difficulty: "Medium",
    category: "Greedy",
    order: 4,
    link: "https://leetcode.com/problems/jump-game-ii/",
    problemStatement:
      "Return the minimum number of jumps to reach the last index.",
    constraints: "1 <= nums.length <= 10^4, 0 <= nums[i] <= 1000",
    starterCode: "function jump(nums) {\n  // Write your code here\n};",
    handlerFunction: "jump",
    starterFunctionName: "jump",
  },
  {
    id: "gas-station",
    title: "Gas Station",
    difficulty: "Medium",
    category: "Greedy",
    order: 5,
    link: "https://leetcode.com/problems/gas-station/",
    problemStatement:
      "Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction.",
    constraints: "n == gas.length == cost.length, 1 <= n <= 10^5",
    starterCode:
      "function canCompleteCircuit(gas, cost) {\n  // Write your code here\n};",
    handlerFunction: "canCompleteCircuit",
    starterFunctionName: "canCompleteCircuit",
  },
  {
    id: "hand-of-straights",
    title: "Hand of Straights",
    difficulty: "Medium",
    category: "Greedy",
    order: 6,
    link: "https://leetcode.com/problems/hand-of-straights/",
    problemStatement:
      "Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.",
    constraints: "1 <= hand.length <= 10^4, 1 <= groupSize <= hand.length",
    starterCode:
      "function isNStraightHand(hand, groupSize) {\n  // Write your code here\n};",
    handlerFunction: "isNStraightHand",
    starterFunctionName: "isNStraightHand",
  },
  {
    id: "partition-labels",
    title: "Partition Labels",
    difficulty: "Medium",
    category: "Greedy",
    order: 7,
    link: "https://leetcode.com/problems/partition-labels/",
    problemStatement:
      "Partition a string into as many parts as possible so that each letter appears in at most one part, and return a list of the sizes of these parts.",
    constraints: "1 <= s.length <= 500",
    starterCode: "function partitionLabels(s) {\n  // Write your code here\n};",
    handlerFunction: "partitionLabels",
    starterFunctionName: "partitionLabels",
  },
  {
    id: "valid-parenthesis-string",
    title: "Valid Parenthesis String",
    difficulty: "Medium",
    category: "Greedy",
    order: 8,
    link: "https://leetcode.com/problems/valid-parenthesis-string/",
    problemStatement:
      "Given a string s containing only '(', ')' and '*', return true if s is valid. '*' could be treated as a single right parenthesis, left parenthesis, or an empty string.",
    constraints: "1 <= s.length <= 100",
    starterCode:
      "function checkValidString(s) {\n  // Write your code here\n};",
    handlerFunction: "checkValidString",
    starterFunctionName: "checkValidString",
  },
  {
    id: "candy",
    title: "Candy",
    difficulty: "Hard",
    category: "Greedy",
    order: 9,
    link: "https://leetcode.com/problems/candy/",
    problemStatement:
      "There are n children standing in a line. Each child is assigned a rating value. Give candies to these children such that each child has at least one candy and children with a higher rating get more candies than their neighbors.",
    constraints: "n == ratings.length, 1 <= n <= 2 * 10^4",
    starterCode: "function candy(ratings) {\n  // Write your code here\n};",
    handlerFunction: "candy",
    starterFunctionName: "candy",
  },
  {
    id: "merge-triplets-to-form-target-triplet",
    title: "Merge Triplets to Form Target Triplet",
    difficulty: "Medium",
    category: "Greedy",
    order: 10,
    link: "https://leetcode.com/problems/merge-triplets-to-form-target-triplet/",
    problemStatement:
      "Determine if it is possible to form a target triplet by merging any number of triplets from a given list.",
    constraints: "1 <= triplets.length <= 10^5, target.length == 3",
    starterCode:
      "function mergeTriplets(triplets, target) {\n  // Write your code here\n};",
    handlerFunction: "mergeTriplets",
    starterFunctionName: "mergeTriplets",
  },
];
